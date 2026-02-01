export default function ArchiveLayout({ archive, latest }: { archive: React.ReactNode; latest: React.ReactNode }) {

  return (
    <div>
      <h1>Archive</h1>
      {
        archive
      }
      <h1>Latest</h1>
      {
        latest
      }
    </div>
  )
}