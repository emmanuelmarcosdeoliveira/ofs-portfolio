"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { works } from "@/constants/works";
import { motion } from "motion/react";
import CardWork from "./card-work";
import TextComponent from "./text";
export default function WorkExperiences() {
  const lastJob = works[0];
  const penultimateJob = works[1];
  const firstJob = works[2];

  return (
    <section className="overflow-hidden container  py-16 mx-auto">
      <TextComponent className="max-sm:text-2xl" variant={"title-xl"}>
        Experiencias anteriores{" "}
      </TextComponent>
      <p className="py-4">Abaixo estão os cargos e empresas anteriores </p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ delay: 0.3 }}
      >
        <Tabs
          defaultValue="tab-1"
          orientation="vertical"
          className="w-full  flex flex-row max-md:flex-col"
        >
          <TabsList className="flex-col max-md:w-full">
            <TabsTrigger value="tab-1" className="w-full">
              {lastJob.role}
            </TabsTrigger>
            <TabsTrigger value="tab-2" className="w-full">
              {penultimateJob.role}
            </TabsTrigger>
            <TabsTrigger value="tab-3" className="w-full">
              {firstJob.role}
            </TabsTrigger>
          </TabsList>
          <div className="grow rounded-md border text-start">
            <TabsContent value="tab-1">
              <CardWork
                startToDate={lastJob.startToDate}
                softSkills={lastJob.softSkills}
                workType={lastJob.workType}
                location={lastJob.location}
                endToDate={lastJob.endToDate}
                descriptionRole={lastJob.descriptionRole}
                achievementsTitle={lastJob.achievementsTitle}
                companyImage={lastJob.companyImage}
                company={lastJob.company}
                achievementsList={lastJob.achievementsList}
                id={lastJob.id}
                role={lastJob.role}
              />
            </TabsContent>
            <TabsContent value="tab-2">
              <CardWork
                startToDate={penultimateJob.startToDate}
                softSkills={penultimateJob.softSkills}
                workType={penultimateJob.workType}
                location={penultimateJob.location}
                endToDate={penultimateJob.endToDate}
                descriptionRole={penultimateJob.descriptionRole}
                achievementsTitle={penultimateJob.achievementsTitle}
                companyImage={penultimateJob.companyImage}
                company={penultimateJob.company}
                achievementsList={penultimateJob.achievementsList}
                id={penultimateJob.id}
                role={penultimateJob.role}
              />
            </TabsContent>
            <TabsContent value="tab-3">
              <CardWork
                startToDate={firstJob.startToDate}
                softSkills={firstJob.softSkills}
                workType={firstJob.workType}
                location={firstJob.location}
                endToDate={firstJob.endToDate}
                descriptionRole={firstJob.descriptionRole}
                achievementsTitle={firstJob.achievementsTitle}
                companyImage={firstJob.companyImage}
                company={firstJob.company}
                achievementsList={firstJob.achievementsList}
                id={firstJob.id}
                role={firstJob.role}
              />
            </TabsContent>
          </div>
        </Tabs>
      </motion.div>
    </section>
  );
}
