
# xMatters Service

This service is designed to allow keptn to communicate with xMatters in order to take full advantage of keptn's auditing and monitoring capabilities. To get the xMatters Problem URL and Evaluation Done URL, follow the instructions here: https://github.com/xmatters/xm-labs-keptn

## Setting up the service to deploy
To configure the service correctly, first edit the service.yaml file (located at `config/service.yaml`), replacing the values under XM_EVAL_URL (line 15) and XM_PROBLEM_URL (17) with the corresponding URLs.

## Install service

1. To install the service, run the `deploy.sh` script as shown below: 

    ```console
    $ ./deploy.sh
    ```

1. To verify the installation, run the following `kubectl` commands: 


    ```console
    $ kubectl get pods -n keptn
    NAME                                                  READY     STATUS      RESTARTS   AGE
    ...
    xmatters-service-6bb7c9c48c-64kfr                                 1/1     Running   0          6d23h
    xmatters-service-evaluation-done-distributor-cf7b64c64-8r989      1/1     Running   0          6d23h
    xmatters-service-problem-distributor-8d5f8b4f4-prslw              1/1     Running   0          6d23h
    ...
    ```

## Uninstall service

1. To uninstall the service, run the following `kubectl` command:

    ```console
    $ kubectl delete -f ./config/service.yml
    ```
