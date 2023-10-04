import {
  InvitationSection,
  LocationSection,
  MainSection,
  MovieSection,
  PhotoSection,
} from "@/components/section";
import GuestBook from "@/components/section/GuestBook";

export default function Home() {
  return (
    <main className="bg-second justify-center items-center h-auto w-full">
      <MainSection />
      <MovieSection />
      <InvitationSection />
      <PhotoSection />
      <LocationSection />
      <GuestBook />
    </main>
  );
}
