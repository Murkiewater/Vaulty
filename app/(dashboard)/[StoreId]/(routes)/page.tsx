import prismadb from "@/lib/prisma.db";

interface DashboardPageProps {
    params: Promise<{ storeId: string }>
};

const DashboardPage: React.FC<DashboardPageProps> = async ({
    params
}) => {
    const { storeId } = await params;
    const store = await prismadb.store.findFirst({
        where: {
            id: storeId
        }
    });

    return (
        <div>
            Active campaign: {store?.name}
        </div>
    );
}

export default DashboardPage;