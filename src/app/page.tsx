import {
  InvitationSection,
  LocationSection,
  MainSection,
  MovieSection,
  PhotoSection,
} from "@/components/section";

export default function Home() {
  return (
    <main className="bg-[#e2e0e0] justify-center items-center h-auto w-full">
      <MainSection />
      <MovieSection />
      <InvitationSection />
      <PhotoSection />
      <LocationSection />
    </main>
  );
}
