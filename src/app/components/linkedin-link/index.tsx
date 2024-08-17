import Link from "next/link";

export default function LinkedinLink() {
  return (
    <Link href={'https://linkedin.com/in/pedrocleal'}
      className="flex items-center py-2 px-4 transition-all rounded-md text-blue-500 gap-2 hover:bg-blue-200" target="_blank" rel="noopener noreferrer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
      <span>LinkedIn</span>
    </Link>
  )
}