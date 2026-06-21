"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TeamsGrid from "@/components/TeamsGrid";
import TeamFlag from "@/components/TeamFlag";
import { verifyUserEmail, selectTeams } from "@/lib/api";

const STEPS = [
  { number: 1, label: "Your Email" },
  { number: 2, label: "Choose Team" },
  { number: 3, label: "Confirmed" },
];

export default function JoinFlow() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [assignedTeams, setAssignedTeams] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [teamError, setTeamError] = useState("");
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);
  const [isAssigningTeams, setIsAssigningTeams] = useState(false);
  const [verifiedUser, setVerifiedUser] = useState(null);
  const [alreadyJoined, setAlreadyJoined] = useState(false);

  const isPaidMember = verifiedUser?.membershipStatus === "paid";
  const isFreeMember = verifiedUser?.membershipStatus === "free";

  const validateEmail = (value) => {
    if (!value.trim()) return "Please enter your registered email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const handleEmailContinue = async (e) => {
    e.preventDefault();
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }

    setIsVerifyingEmail(true);
    setEmailError("");

    try {
      const result = await verifyUserEmail(email);
      setVerifiedUser(result.user);
      setSelectedTeam(null);

      if (result.alreadyJoined) {
        setAlreadyJoined(true);
        setAssignedTeams(result.teams || []);
        setStep(3);
        return;
      }

      setAlreadyJoined(false);
      setAssignedTeams([]);
      setStep(2);
    } catch (err) {
      setEmailError(err.message);
    } finally {
      setIsVerifyingEmail(false);
    }
  };

  const handleTeamContinue = async () => {
    if (isPaidMember && !selectedTeam) {
      setTeamError("Please select your team of choice to continue.");
      return;
    }

    setIsAssigningTeams(true);
    setTeamError("");

    try {
      const result = await selectTeams({
        email,
        manualTeamId: isPaidMember ? selectedTeam?.id : null,
      });
      setAssignedTeams(result.teams);
      setStep(3);
    } catch (err) {
      setTeamError(err.message);
    } finally {
      setIsAssigningTeams(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-800 font-extrabold tracking-tight">
            <Image src="/logo1.png" alt="Deal 360 Logo" width={160} height={48} className="object-contain" priority />
          </Link>
          <span className="text-xs font-semibold tracking-wider text-gray-400">
            World Cup Challenge
          </span>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="flex items-center justify-center mb-10">
            {STEPS.map((s, index) => (
              <div key={s.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s.number
                      ? "bg-red-400 text-white"
                      : "bg-gray-200 text-gray-500"
                      }`}
                  >
                    {step > s.number ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      s.number
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium hidden sm:block ${step >= s.number ? "text-gray-800" : "text-gray-400"
                      }`}
                  >
                    {s.label}
                  </span>
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`w-16 sm:w-24 h-0.5 mx-2 sm:mx-4 mb-6 sm:mb-0 transition-colors ${step > s.number ? "bg-red-400" : "bg-gray-200"
                      }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-10">
            {step === 1 && (
              <div>
                <Link href="/" className="flex items-center gap-2 text-gray-800 font-extrabold tracking-tight">
                  <Image src="/logo1.png" alt="Deal 360 Logo" width={160} height={48} className="object-contain" priority />
                </Link>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center">
                  Join the World Cup Challenge
                </h1>
                <p className="mt-3 text-gray-500 text-center text-sm sm:text-base">
                  Enter your registered Deal 360 email to get started. It&apos;s free!
                </p>

                <form onSubmit={handleEmailContinue} className="mt-8">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Registered Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-md border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400/30 focus:border-red-400 transition ${emailError ? "border-red-400" : "border-gray-300"
                      }`}
                  />
                  {emailError && (
                    <p className="mt-2 text-sm text-red-500">{emailError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isVerifyingEmail}
                    className="mt-6 w-full bg-red-400 hover:bg-red-500 disabled:bg-red-300 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-md transition duration-300 shadow-lg text-sm sm:text-base tracking-wide"
                  >
                    {isVerifyingEmail ? "Checking..." : "Continue"}
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center">
                  {isPaidMember ? "Choose Your Team" : "Your Random Team"}
                </h1>

                {verifiedUser && (
                  <p className="mt-2 text-center text-sm text-[#7FFFD4] font-medium">
                    Welcome, {verifiedUser.name}
                  </p>
                )}

                {isFreeMember && (
                  <>
                    <p className="mt-3 text-gray-500 text-center text-sm sm:text-base">
                      As a free member, you will receive <span className="font-semibold text-gray-700">1 random team</span> from available teams. You cannot choose a team yourself.
                    </p>
                    <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                      <div className="text-4xl mb-3">🎲</div>
                      <p className="text-sm text-gray-600">
                        Click below and we&apos;ll randomly assign one available team to you.
                      </p>
                    </div>
                  </>
                )}

                {isPaidMember && (
                  <>
                    <p className="mt-3 text-gray-500 text-center text-sm sm:text-base">
                      As a paid member, you get <span className="font-semibold text-gray-700">1 random team</span> plus <span className="font-semibold text-gray-700">1 team of your choice</span>.
                    </p>
                    <p className="mt-2 text-center text-xs text-gray-400">
                      Select your team of choice below. Your random team will be assigned when you confirm.
                    </p>
                    <div className="mt-8">
                      <TeamsGrid
                        selectable
                        selectedTeamId={selectedTeam?.id}
                        onSelectTeam={(team) => {
                          setSelectedTeam(team);
                          if (teamError) setTeamError("");
                        }}
                      />
                    </div>
                  </>
                )}

                {teamError && (
                  <p className="mt-3 text-sm text-red-500 text-center">{teamError}</p>
                )}

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    disabled={isAssigningTeams}
                    className="flex-1 bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-4 px-8 rounded-md transition duration-300 text-sm sm:text-base"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleTeamContinue}
                    disabled={isAssigningTeams}
                    className="flex-1 bg-red-400 hover:bg-red-500 disabled:bg-red-300 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-md transition duration-300 shadow-lg text-sm sm:text-base tracking-wide"
                  >
                    {isAssigningTeams
                      ? "Assigning..."
                      : isFreeMember
                        ? "Assign My Random Team"
                        : "Confirm Teams"}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <div className="mx-auto w-20 h-20 bg-[#7FFFD4]/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-[#7FFFD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  You&apos;re In!
                </h1>
                <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-md mx-auto">
                  {alreadyJoined
                    ? "You have already joined the Deal 360 World Cup Challenge. Here are your teams."
                    : "You've successfully joined the Deal 360 World Cup Challenge. Good luck cheering for your teams!"}
                </p>

                <div className="mt-8 bg-gray-50 rounded-lg border border-gray-100 p-6 text-left space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Email</span>
                    <span className="font-medium text-gray-800">{email}</span>
                  </div>

                  {assignedTeams.map((team) => (
                    <div
                      key={`${team.id}-${team.selectionType}`}
                      className="pt-4 border-t border-gray-200 flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-500">
                        {team.selectionType === "auto" ? "Random Team" : "Your Choice"}
                      </span>
                      <span className="font-medium text-gray-800 flex items-center gap-2">
                        <TeamFlag flag={team.flag} name={team.name} className="text-xl" />
                        {team.name}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-xs text-gray-400">
                  Follow the tournament and watch for prize updates as your teams progress.
                </p>

                <Link
                  href="/"
                  className="mt-8 inline-block w-full bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-md transition duration-300 shadow-lg text-sm sm:text-base tracking-wide text-center"
                >
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
