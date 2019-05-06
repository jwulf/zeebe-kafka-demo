import { v4 as uuid } from "uuid";
import { ZBClient } from "zeebe-node";
async function main() {
  const zb = new ZBClient("localhost");
  await zb.deployWorkflow("./bpmn/send-to-kafka.bpmn", { redeploy: true });
  await zb.createWorkflowInstance("send-to-kafka", { payloadId: uuid() });
}

main();
