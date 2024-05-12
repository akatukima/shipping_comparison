FROM node:20.10

ENV TZ Asia/Tokyo
ENV PROJECT_ROOT /project

WORKDIR ${PROJECT_ROOT}

RUN apt-get update \
    && apt-get install -y \
    git \
    vim

COPY scripts/boot.sh /boot/boot.sh

CMD ["/bin/bash", "/boot/boot.sh"]
