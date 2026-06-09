"use client";

import { useEffect, useState } from "react";
import { getFifaTeams } from "@/lib/api";
import TeamFlag from "@/components/TeamFlag";

export default function TeamsGrid({
  limit,
  selectable = false,
  selectedTeamId = null,
  onSelectTeam,
  showViewAll = false,
}) {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    getFifaTeams()
      .then(setTeams)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: limit || 12 }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-4 bg-gray-50 animate-pulse h-[60px]"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-sm text-red-500 py-6">
        {error} Make sure the API server is running.
      </p>
    );
  }

  const visibleTeams = showAll || !limit ? teams : teams.slice(0, limit);
  const hasMore = limit && teams.length > limit;

  return (
    <>
      <div
        className={
          selectable
            ? "grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[340px] overflow-y-auto pr-1"
            : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        }
      >
        {visibleTeams.map((team) => {
          const isSelected = selectedTeamId === team.id;
          const slotsLeft = team.slotsLeft ?? Math.max(0, 3 - (team.chooseCount ?? 0));

          const content = (
            <div className="flex items-center justify-between w-full gap-2">
              <div className="flex items-center min-w-0">
                <TeamFlag flag={team.flag} name={team.name} className="text-2xl mr-3 shrink-0" />
                <div className="min-w-0">
                  <span className="text-sm font-medium text-gray-700 block truncate">{team.name}</span>
                  {!selectable && (
                    <span className="text-xs text-gray-400">Group {team.groups}</span>
                  )}
                </div>
              </div>
              <span
                className={`shrink-0 text-xs font-semibold whitespace-nowrap ${
                  slotsLeft <= 0 ? "text-gray-400" : "text-[#2DD4BF]"
                }`}
              >
                {slotsLeft <= 0 ? "Full" : `${slotsLeft} Left`}
              </span>
            </div>
          );

          if (selectable) {
            const isFull = slotsLeft <= 0;

            return (
              <button
                key={team.id}
                type="button"
                disabled={isFull}
                onClick={() => onSelectTeam?.(team)}
                className={`border rounded-md p-3 flex items-center justify-start transition text-left w-full ${
                  isFull
                    ? "border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed"
                    : isSelected
                      ? "border-red-400 bg-red-50 shadow-sm ring-2 ring-red-400/20 cursor-pointer"
                      : "border-gray-200 hover:border-[#2DD4BF] hover:shadow-sm bg-white cursor-pointer"
                }`}
              >
                {content}
              </button>
            );
          }

          return (
            <div
              key={team.id}
              className={`border rounded-md p-4 flex items-center transition bg-white ${
                slotsLeft <= 0
                  ? "border-gray-200 opacity-75"
                  : "border-gray-200 hover:border-[#2DD4BF] hover:shadow-sm cursor-pointer"
              }`}
            >
              {content}
            </div>
          );
        })}

        {showViewAll && hasMore && !showAll && (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="border border-gray-200 rounded-md p-4 flex items-center justify-start hover:bg-gray-50 transition cursor-pointer bg-gray-50/50 text-left"
          >
            <div className="flex -space-x-2 mr-3">
              <div className="w-6 h-6 rounded-full bg-teal-200 border-2 border-white" />
              <div className="w-6 h-6 rounded-full bg-teal-400 border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-800 leading-tight">View All</span>
              <span className="text-xs font-semibold text-gray-800 leading-tight">Teams</span>
            </div>
          </button>
        )}
      </div>
    </>
  );
}
