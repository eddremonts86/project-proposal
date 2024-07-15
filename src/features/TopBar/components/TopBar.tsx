import TopBarNavigation from './TopBarNavigation'
export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b-2">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div>Logo</div>
        <TopBarNavigation />
      </div>
    </header>
  )
}
