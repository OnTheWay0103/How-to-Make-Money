export default function EmptyState() {
  return (
    <div className="bg-bg-card rounded-xl p-12 text-center">
      <div className="text-5xl mb-4">📊</div>
      <h2 className="text-xl font-semibold mb-2">Connect Google Analytics</h2>
      <p className="text-text-secondary max-w-md mx-auto mb-6">
        Set up a Google Analytics Data API service account and add credentials
        to start monitoring your website traffic.
      </p>
      <div className="bg-bg-primary rounded-lg p-4 text-left text-sm font-mono text-text-secondary max-w-lg mx-auto">
        <p className="text-text-primary font-semibold mb-2">Quick setup:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Create a service account at console.cloud.google.com</li>
          <li>Enable Google Analytics Data API</li>
          <li>Add service account email to your GA4 property</li>
          <li>Set GA_CLIENT_EMAIL and GA_PRIVATE_KEY env vars</li>
          <li>Add sites to lib/sites.ts</li>
        </ol>
      </div>
    </div>
  );
}
