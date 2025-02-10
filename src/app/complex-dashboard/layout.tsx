export default function DashboardLayout({ 
  children,
  notification,
  revenue,
  users,
  login 
}: {
  children: React.ReactNode,
  notification: React.ReactNode,
  revenue: React.ReactNode,
  users: React.ReactNode
  login: React.ReactNode
}) {

  /**
   * Condicional routes
   */
  const isLogin = true

  return (<>
    {isLogin 
      ? <div>
          <div>{children}</div>
          <div className="flex">
            <div className="flex flex-col">
              <div>{users}</div>
              <div>{revenue}</div>
            </div>
            <div className="flex flex-1">{notification}</div>
          </div>
        </div>
      : login
    }
  </>)
}
