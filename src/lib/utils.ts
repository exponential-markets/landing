import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRelativeTime(dateString: string) {
  const lastUpdatedAt = new Date(dateString);
  const now = new Date();

  // Calculate the differences
  const diffTime = Math.abs(now.getTime() - lastUpdatedAt.getTime());
  const diffYears = now.getFullYear() - lastUpdatedAt.getFullYear();
  const diffMonths = now.getMonth() - lastUpdatedAt.getMonth() + diffYears * 12;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

  // Return the relative time as a string
  if (diffYears > 0) {
    return `${diffYears} ${diffYears > 1 ? "years" : "year"} ago`;
  } else if (diffMonths > 0) {
    return `${diffMonths} ${diffMonths > 1 ? "months" : "month"} ago`;
  } else if (diffDays > 0) {
    return `${diffDays} ${diffDays > 1 ? "days" : "day"} ago`;
  } else if (diffHours > 0) {
    return `${diffHours} ${diffHours > 1 ? "hours" : "hour"} ago`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes} ${diffMinutes > 1 ? "minutes" : "minute"} ago`;
  } else {
    return "Just now";
  }
}
