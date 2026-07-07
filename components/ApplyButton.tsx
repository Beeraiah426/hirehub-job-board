"use client";

import { useState } from "react";
import ApplyModal from "./ApplyModal";

type ApplyButtonProps = {
  jobId: number;
};

export default function ApplyButton({
  jobId,
}: ApplyButtonProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleApply = () => {
    const appliedJobs = JSON.parse(
      localStorage.getItem("appliedJobs") || "[]"
    );

    if (appliedJobs.includes(jobId)) {
      import("react-hot-toast").then(({ default: toast }) => {
        toast.error(
          "⚠️ You have already applied for this position."
        );
      });

      return;
    }

    setOpenModal(true);
  };

  return (
    <>
      <div className="mt-12">

        <button
          onClick={handleApply}
          className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl"
        >
          Apply Now
        </button>

      </div>

      <ApplyModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        jobId={jobId}
      />
    </>
  );
}