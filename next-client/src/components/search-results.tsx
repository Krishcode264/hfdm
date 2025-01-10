import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"

type SearchResult = {
  id: number
  name: string
  type: string
}

type SearchResultsProps = {
  results: SearchResult[]
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div className="mt-2 p-3   rounded-xl space-y-2 flex-1  overflow-y-auto">
      {results.map((result) => (
        <Card key={result.id}  className="border-none" >
          <CardContent className=" border-none p-2 flex rounded-xl justify-between bg-slate-500 items-center">
            <span>
              <h2 className="text-lg text-white font-semibold">{result.name}</h2>
              <p className="text-sm text-gray-200">{result.type}</p>
            </span>
            <div>
              <Button className="mr-3">view or Edit the details </Button>
             
            </div>
          </CardContent>
        </Card>
      ))}
      {results.length === 0 && (
        <p className="text-center text-gray-500">No results found</p>
      )}


    </div>
  );
}

