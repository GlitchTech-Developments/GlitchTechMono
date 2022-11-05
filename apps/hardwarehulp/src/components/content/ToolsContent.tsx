import { useRouter } from "next/router"

const ToolsContent = () => {
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickRouter = (e: any, link: string) => {
    e.preventDefault()
    router.push(link)
  }

  return (
    <section id="main" className="wrapper">
      <div className="inner">
        <div className="content borders no-select">
          <div className="row">
            <div className="col-12 col-12-medium">
              <h4>Diensten</h4>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Naam</th>
                      <th className="hidden-mob">Beschrijving</th>
                      <th>Downloadlink</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>All-in-one Toolkit</td>
                      <td className="hidden-mob">
                        Algemene toolkit voor reparatie en testing van computers
                        en laptops.
                      </td>
                      <td>
                        <span
                          onClick={(e) =>
                            clickRouter(e, "/downloads/HHK-WinRepair.7z")
                          }
                        >
                          Download
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToolsContent
