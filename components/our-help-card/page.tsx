import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type CardComponentProps = {
  title: string;
  desc: string;
  id: number;
};

const CardComponent = (item: CardComponentProps) => {
  return (
    <Card key={item.id} className=' lg:max-w-96 bg-slate-50'>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>{item.desc}</CardContent>
    </Card>
  );
};

export default CardComponent;
