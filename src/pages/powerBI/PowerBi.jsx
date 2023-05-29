import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function PowerBi () {

  return(
    <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'f1526d1b-7e3f-4d7f-871c-04d712893bb4',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f1526d1b-7e3f-4d7f-871c-04d712893bb4&autoAuth=true&ctid=3c8ea0e4-127c-4a02-ac65-58830e4ac608",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IjZaWDRwejRWVzNCM2J4OWpjOGpVX1ZkTzRMcE9OTTU4bTlYNzlmOXBXMWciLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYzhlYTBlNC0xMjdjLTRhMDItYWM2NS01ODgzMGU0YWM2MDgvIiwiaWF0IjoxNjgyNDc3NDk2LCJuYmYiOjE2ODI0Nzc0OTYsImV4cCI6MTY4MjQ4MTM5NiwiYWlvIjoiRTJaZ1lLZ0lhNWl5Y2YzYUo1UHVQODV1clhYNER3QT0iLCJhcHBfZGlzcGxheW5hbWUiOiJDbG91ZE9wc1NlbGZTZXJ2aWNlQXBwIiwiYXBwaWQiOiI1ZjRmZmMzMS1hMjhmLTQ1YmQtYmI2Ni04ZjJmYTMyNTY4ZWEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYzhlYTBlNC0xMjdjLTRhMDItYWM2NS01ODgzMGU0YWM2MDgvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiJjNzc4NTk0NC1lNTE1LTRlYjItODc5Zi1mZDA5Njc2YjhkYzQiLCJyaCI6IjAuQVZRQTVLQ09QSHdTQWtxc1pWaUREa3JHQ0FNQUFBQUFBQUFBd0FBQUFBQUFBQUJVQUFBLiIsInJvbGVzIjpbIlVzZXIuUmVhZFdyaXRlLkFsbCIsIkRpcmVjdG9yeS5SZWFkV3JpdGUuQWxsIiwiRGlyZWN0b3J5LlJlYWQuQWxsIiwiVXNlci5SZWFkLkFsbCJdLCJzdWIiOiJjNzc4NTk0NC1lNTE1LTRlYjItODc5Zi1mZDA5Njc2YjhkYzQiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiIzYzhlYTBlNC0xMjdjLTRhMDItYWM2NS01ODgzMGU0YWM2MDgiLCJ1dGkiOiItTzVwUkU1enUwS2J5cGJIM2pJZEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyIwOTk3YTFkMC0wZDFkLTRhY2ItYjQwOC1kNWNhNzMxMjFlOTAiXSwieG1zX3RjZHQiOjEzNTk0NTM0OTN9.lLL2dkn_A2giiXDk2sV6iEMqDEyrdHL_EpEpqC-NA7MX95_oQCxF6Nn4TX5KL8AEoFxlRkcN8GXGMXQUgeEVQDKtDujhsWWfnbsLR6P0Llhr0Dw5L1eEBpEvZCN2bIwoK7fyvd5yvfHiJV7tQfDMrALaUyo8syLzXca_VtkvQMc-S0kQ0C5arNloOCgIefMsjloaq_TzlmCOEIFJUph6adFGR0mcnAhMJu_AVEGD9WgU2-g_PZTd6C3q_9oJOeJgC3z3cDwG9w-1khWGet2rHzxB45dC3nuP1GalLbFnaZBqg7F3QxbUrpukqxODJcQWCoPzkY696YP9yfi9_0OihQ',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
  )
    
}

export default PowerBi;