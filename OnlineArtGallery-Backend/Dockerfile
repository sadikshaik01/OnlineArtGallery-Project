# ===============================
# 1. Build Stage (Maven + JDK 21)
# ===============================
FROM maven:3.9.6-eclipse-temurin-21 AS build

# Set working directory
WORKDIR /app

# Copy the pom.xml and download dependencies first (layer caching)
COPY pom.xml .
RUN mvn -ntp dependency:go-offline

# Copy source code
COPY src ./src

# Build the application
RUN mvn -ntp clean package -DskipTests


# ===============================
# 2. Runtime Stage (Light JRE 21)
# ===============================
FROM eclipse-temurin:21-jre

WORKDIR /app

# Copy the jar from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port Render will use
EXPOSE 8080

# JVM optimizations for container
ENTRYPOINT ["java", "-XX:+UseContainerSupport", "-Xmx512m", "-jar", "app.jar"]
