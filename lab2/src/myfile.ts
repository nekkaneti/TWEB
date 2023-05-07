interface myinterface {
    fruits: string;
    vegetables: number;
    password: any;
    parents: boolean;
    countries: number[];
}
interface myinterface2 extends myinterface {
    house: string;
    animals: number;
}
const variable: myinterface = { fruits: "banana", vegetables: 4, password: true, parents: true, countries: [1,2,3,4,5] }