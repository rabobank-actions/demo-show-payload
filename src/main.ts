import * as core from '@actions/core'
import * as github from '@actions/github'
async function run(): Promise<void> {
  try {
    core.setOutput('time', new Date().toTimeString())

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    core.info(`The event payload: ${payload}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
