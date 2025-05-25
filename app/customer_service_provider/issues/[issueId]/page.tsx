// app/customer_service_provider/issue/[issueId]/page.tsx

export const dynamic = "force-dynamic";

import IssueThread from "@/components/issues/issueThread";

export default function IssuePage({ params }: { params: { issueId: string } }) {
  return <IssueThread issueId={params.issueId}/>;
}
