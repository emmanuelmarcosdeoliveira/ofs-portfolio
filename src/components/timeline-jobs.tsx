import { Timeline } from "@/components/ui/timeline";
import { Calendar, Clock, MapPinned } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function TimelineDemo() {
  const data = [
    {
      title: "2022",
      content: (
        <Card className="dark:bg-muted/50 p-4 shadow-2xl">
          <CardHeader className="flex">
            <Image
              className="rounded-md shadow-xl"
              src="/logo-arcos.png"
              width={35}
              height={32}
              alt="logo Arcos Dourados"
            />
            <div>
              <CardTitle>Gerente de Negócios</CardTitle>
              <CardDescription className="flex gap-2 items-center overflow-x-hidden">
                <p>
                  Arcos Dourados - <strong>Mc Donald &apos;s </strong>
                </p>
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className=":flex-col flex gap-8 items-center max-md:flex-col max-md:gap-2 max-md:items-start mb-4">
              <div className="flex gap-2 items-center">
                <Calendar size={16} />
                <span className="text-muted-foreground text-sm">
                  Janeiro 2015 - Maio 2022
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <MapPinned size={16} />
                <span className="text-muted-foreground text-sm">
                  São Paulo - SP
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Clock size={16} />
                <span className="text-muted-foreground text-sm">Integral</span>
              </div>
            </div>
            <p>
              Como gestor direto do restaurante liderei equipes de 12 gerentes e
              60 funcionários Responsável por gerir diversos Indicadores como
              Turnover, Vendas, Margem Bruta, Treinamento garantindo excelência
              operacional e resultados financeiros.
            </p>
            <strong className="block mt-4">Principais Conquistas:</strong>
            <ul className="*:text-muted-foreground flex flex-col gap-2 list-disc ml-4 mt-1">
              <li>
                +18% no aumento de vendas através de estratégias de ticket médio
                e ações promocionais.
              </li>
              <li>
                Redução de custos em 15% com controle de MDO, margem bruta e
                otimização de processos.
              </li>
              <li>
                Turnover reduzido em 20% com programas de treinamento e
                engajamento. NPS acima de 90%, garantindo experiência
                excepcional para o cliente.
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 items-center">
            <Badge className="bg-accent text-foreground">liderança</Badge>
            <Badge className="bg-accent text-foreground">
              trabalho em equipe
            </Badge>
            <Badge className="bg-accent text-foreground">
              trabalho em equipe
            </Badge>
            <Badge className="bg-accent text-foreground">
              trabalho em equipe
            </Badge>
            <Badge className="bg-accent text-foreground">
              trabalho em equipe
            </Badge>
          </CardFooter>
        </Card>
      ),
    },
    {
      title: "2014",
      content: (
        <Card className="dark:bg-muted/50 p-4 shadow-2xl">
          <CardHeader className="flex">
            <Image
              className="rounded-md shadow-xl"
              src="/logo-arcos.png"
              width={35}
              height={32}
              alt="logo Arcos Dourados"
            />
            <div>
              <CardTitle>Gerente Assistente</CardTitle>
              <CardDescription className="flex gap-2 items-center overflow-x-hidden">
                <p>
                  Arcos Dourados - <strong>Mc Donald &apos;s </strong>
                </p>
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className=":flex-col flex gap-8 items-center max-md:flex-col max-md:gap-2 max-md:items-start mb-4">
              <div className="flex gap-2 items-center">
                <Calendar size={16} />
                <span className="text-muted-foreground text-sm">
                  Janeiro 2012 - Dezembro 2014
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <MapPinned size={16} />
                <span className="text-muted-foreground text-sm">
                  São Paulo - SP
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Clock size={16} />
                <span className="text-muted-foreground text-sm">Integral</span>
              </div>
            </div>
            <p>
              Gestão de programas de capacitação e integração para formação de
              equipes de alta performance, garantindo padronização e melhoria
              contínua.
            </p>
            <strong className="block mt-4">Resultados obtidos:</strong>
            <ul className="*:text-muted-foreground flex flex-col gap-2 list-disc ml-4 mt-1">
              <li>
                +15% em produtividade com implementação de treinamentos
                direcionados.
              </li>
              <li>
                Erros operacionais reduzidos em 20% por padronização de
                processos.
              </li>
              <li>
                Apoio na gestão financeira, controle de inventário e
                planejamento de mão de obra.
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 items-center">
            <Badge className="bg-accent text-foreground">treinamento</Badge>
            <Badge className="bg-accent text-foreground">
              gestão de equipes
            </Badge>
          </CardFooter>
        </Card>
      ),
    },
    {
      title: "2012",
      content: (
        <Card className="dark:bg-muted/50 p-4 shadow-2xl">
          <CardHeader className="flex">
            <Image
              className="rounded-md shadow-xl"
              src="/logo-arcos.png"
              width={35}
              height={32}
              alt="logo Arcos Dourados"
            />
            <div>
              <CardTitle>Gerente de Plantão</CardTitle>
              <CardDescription className="flex gap-2 items-center overflow-x-hidden">
                <p>
                 Arcos Dourados - <strong>Mc Donald &apos;s </strong>
                </p>
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className=":flex-col flex gap-8 items-center max-lg:flex-col max-lg:gap-2 max-lg:items-start mb-4">
              <div className="flex gap-2 items-center">
                <Calendar size={16} />
                <span className="text-muted-foreground text-sm">
                  Setembro 2007 - Janeiro 2012
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <MapPinned size={16} />
                <span className="text-muted-foreground text-sm">
                  São Paulo - SP
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Clock size={16} />
                <span className="text-muted-foreground text-sm">Integral</span>
              </div>
            </div>
            <p>
              Garantia dos resultados do restaurante durante o plantão, com foco
              em excelência operacional, vendas e atendimento ao cliente.
            </p>
            <strong className="block mt-4">Principais entregas:</strong>
            <ul className="*:text-muted-foreground flex flex-col gap-2 list-disc ml-4 mt-1">
              <li>+12% no ticket médio através de estratégias de vendas.</li>
              <li>
                Controle de inventário, qualidade e segurança alimentar (100%
                conformidade em auditorias).
              </li>
              <li>
                Acompanhamento de treinamentos e correção de procedimentos em
                tempo real.
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 items-center">
            <Badge className="bg-accent text-foreground">
              gestão de vendas
            </Badge>
            <Badge className="bg-accent text-foreground">
              gestão de pessoas
            </Badge>
          </CardFooter>
        </Card>
      ),
    },
  ];
  return (
    <div className="overflow-clip relative w-full">
      <Timeline data={data} />
    </div>
  );
}
