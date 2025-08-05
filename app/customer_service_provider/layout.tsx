export default function CustomerServiceProviderLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
       <div className="h-[calc(100vh-70px)] flex bg-green-50">
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
    }