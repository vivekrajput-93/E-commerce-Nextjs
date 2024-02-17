import { Product } from "@/types"
import ProductCard from "./ui/ProductCard";

interface PorductListProps {
    items: Product[];
}



const ProductList:React.FC<PorductListProps> = ({items}) => {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map((item) => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}


export default ProductList;