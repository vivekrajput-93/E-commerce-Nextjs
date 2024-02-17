import { Product } from "@/types";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./card";
import Image from "next/image";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <Link
      href="/"
      className="outline-0 hover:ring-2 focus:ring-2 ring-primary transition duration-300 rounded-lg"
    >
      <Card className="rounded-lg border-2">
      <CardContent className="pt-4">
            <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
              <Image
                src={data.images?.[0]}
                alt=""
                fill
                className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </CardContent>
        <CardFooter className="flex items-start">
          <div>
            <p className="text-lg font-semibold mr-3">{data.name}</p>
            <p className="text-sm text-primary/60">{data.category}</p>
          </div>
          <div className="flex items-center justify-between ">{data.price}</div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
