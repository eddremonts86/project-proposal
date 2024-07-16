import TopBarNavigation from './TopBarNavigation'
export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex h-14 items-center justify-between px-6">
        <div>Logo</div>
        <TopBarNavigation />
      </div>
    </header>
  )
}
