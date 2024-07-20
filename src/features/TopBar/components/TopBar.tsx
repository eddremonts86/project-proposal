import TopBarNavigation from './TopBarNavigation'

export default function TopBar() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b-2 backdrop-blur">
      <div className="flex h-14 items-center justify-between px-6">
        <div>Logo</div>
        <TopBarNavigation />
      </div>
    </header>
  )
}
