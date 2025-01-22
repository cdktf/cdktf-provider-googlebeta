# `googleRedisCluster` Submodule <a name="`googleRedisCluster` Submodule" id="@cdktf/provider-google-beta.googleRedisCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRedisCluster <a name="GoogleRedisCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster google_redis_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisCluster;

GoogleRedisCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .pscConfigs(IResolvable)
    .pscConfigs(java.util.List<GoogleRedisClusterPscConfigs>)
    .shardCount(java.lang.Number)
//  .authorizationMode(java.lang.String)
//  .crossClusterReplicationConfig(GoogleRedisClusterCrossClusterReplicationConfig)
//  .deletionProtectionEnabled(java.lang.Boolean)
//  .deletionProtectionEnabled(IResolvable)
//  .id(java.lang.String)
//  .maintenancePolicy(GoogleRedisClusterMaintenancePolicy)
//  .name(java.lang.String)
//  .nodeType(java.lang.String)
//  .persistenceConfig(GoogleRedisClusterPersistenceConfig)
//  .project(java.lang.String)
//  .redisConfigs(java.util.Map<java.lang.String, java.lang.String>)
//  .region(java.lang.String)
//  .replicaCount(java.lang.Number)
//  .timeouts(GoogleRedisClusterTimeouts)
//  .transitEncryptionMode(java.lang.String)
//  .zoneDistributionConfig(GoogleRedisClusterZoneDistributionConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.pscConfigs">pscConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>></code> | psc_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | Required. Number of shards for the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.authorizationMode">authorizationMode</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.crossClusterReplicationConfig">crossClusterReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a></code> | cross_cluster_replication_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#id GoogleRedisCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | The nodeType for the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#project GoogleRedisCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.redisConfigs">redisConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configure Redis Cluster behavior using a subset of native Redis configuration parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | Optional. The number of replica nodes per shard. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.transitEncryptionMode">transitEncryptionMode</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.zoneDistributionConfig">zoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pscConfigs`<sup>Required</sup> <a name="pscConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.pscConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>>

psc_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#psc_configs GoogleRedisCluster#psc_configs}

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.shardCount"></a>

- *Type:* java.lang.Number

Required. Number of shards for the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#shard_count GoogleRedisCluster#shard_count}

---

##### `authorizationMode`<sup>Optional</sup> <a name="authorizationMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.authorizationMode"></a>

- *Type:* java.lang.String

Optional.

The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. Default value: "AUTH_MODE_DISABLED" Possible values: ["AUTH_MODE_UNSPECIFIED", "AUTH_MODE_IAM_AUTH", "AUTH_MODE_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#authorization_mode GoogleRedisCluster#authorization_mode}

---

##### `crossClusterReplicationConfig`<sup>Optional</sup> <a name="crossClusterReplicationConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.crossClusterReplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a>

cross_cluster_replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#cross_cluster_replication_config GoogleRedisCluster#cross_cluster_replication_config}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

Indicates if the cluster is deletion protected or not.
If the value if set to true, any delete cluster operation will fail.
Default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#deletion_protection_enabled GoogleRedisCluster#deletion_protection_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#id GoogleRedisCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.maintenancePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#maintenance_policy GoogleRedisCluster#maintenance_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#name GoogleRedisCluster#name}

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

The nodeType for the Redis cluster.

If not provided, REDIS_HIGHMEM_MEDIUM will be used as default Possible values: ["REDIS_SHARED_CORE_NANO", "REDIS_HIGHMEM_MEDIUM", "REDIS_HIGHMEM_XLARGE", "REDIS_STANDARD_SMALL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#node_type GoogleRedisCluster#node_type}

---

##### `persistenceConfig`<sup>Optional</sup> <a name="persistenceConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.persistenceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#persistence_config GoogleRedisCluster#persistence_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#project GoogleRedisCluster#project}.

---

##### `redisConfigs`<sup>Optional</sup> <a name="redisConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.redisConfigs"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configure Redis Cluster behavior using a subset of native Redis configuration parameters.

Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/cluster/supported-instance-configurations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#redis_configs GoogleRedisCluster#redis_configs}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#region GoogleRedisCluster#region}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.replicaCount"></a>

- *Type:* java.lang.Number

Optional. The number of replica nodes per shard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#replica_count GoogleRedisCluster#replica_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#timeouts GoogleRedisCluster#timeouts}

---

##### `transitEncryptionMode`<sup>Optional</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.transitEncryptionMode"></a>

- *Type:* java.lang.String

Optional.

The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster. Default value: "TRANSIT_ENCRYPTION_MODE_DISABLED" Possible values: ["TRANSIT_ENCRYPTION_MODE_UNSPECIFIED", "TRANSIT_ENCRYPTION_MODE_DISABLED", "TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#transit_encryption_mode GoogleRedisCluster#transit_encryption_mode}

---

##### `zoneDistributionConfig`<sup>Optional</sup> <a name="zoneDistributionConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.zoneDistributionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#zone_distribution_config GoogleRedisCluster#zone_distribution_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putCrossClusterReplicationConfig">putCrossClusterReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPersistenceConfig">putPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPscConfigs">putPscConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putZoneDistributionConfig">putZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetAuthorizationMode">resetAuthorizationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetCrossClusterReplicationConfig">resetCrossClusterReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetPersistenceConfig">resetPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetRedisConfigs">resetRedisConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetTransitEncryptionMode">resetTransitEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetZoneDistributionConfig">resetZoneDistributionConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCrossClusterReplicationConfig` <a name="putCrossClusterReplicationConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putCrossClusterReplicationConfig"></a>

```java
public void putCrossClusterReplicationConfig(GoogleRedisClusterCrossClusterReplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putCrossClusterReplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a>

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putMaintenancePolicy"></a>

```java
public void putMaintenancePolicy(GoogleRedisClusterMaintenancePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a>

---

##### `putPersistenceConfig` <a name="putPersistenceConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPersistenceConfig"></a>

```java
public void putPersistenceConfig(GoogleRedisClusterPersistenceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPersistenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a>

---

##### `putPscConfigs` <a name="putPscConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPscConfigs"></a>

```java
public void putPscConfigs(IResolvable OR java.util.List<GoogleRedisClusterPscConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPscConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putTimeouts"></a>

```java
public void putTimeouts(GoogleRedisClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>

---

##### `putZoneDistributionConfig` <a name="putZoneDistributionConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putZoneDistributionConfig"></a>

```java
public void putZoneDistributionConfig(GoogleRedisClusterZoneDistributionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putZoneDistributionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a>

---

##### `resetAuthorizationMode` <a name="resetAuthorizationMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetAuthorizationMode"></a>

```java
public void resetAuthorizationMode()
```

##### `resetCrossClusterReplicationConfig` <a name="resetCrossClusterReplicationConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetCrossClusterReplicationConfig"></a>

```java
public void resetCrossClusterReplicationConfig()
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetMaintenancePolicy"></a>

```java
public void resetMaintenancePolicy()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetName"></a>

```java
public void resetName()
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetNodeType"></a>

```java
public void resetNodeType()
```

##### `resetPersistenceConfig` <a name="resetPersistenceConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetPersistenceConfig"></a>

```java
public void resetPersistenceConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetRedisConfigs` <a name="resetRedisConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetRedisConfigs"></a>

```java
public void resetRedisConfigs()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetReplicaCount"></a>

```java
public void resetReplicaCount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransitEncryptionMode` <a name="resetTransitEncryptionMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetTransitEncryptionMode"></a>

```java
public void resetTransitEncryptionMode()
```

##### `resetZoneDistributionConfig` <a name="resetZoneDistributionConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetZoneDistributionConfig"></a>

```java
public void resetZoneDistributionConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleRedisCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisCluster;

GoogleRedisCluster.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisCluster;

GoogleRedisCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisCluster;

GoogleRedisCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisCluster;

GoogleRedisCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleRedisCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleRedisCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleRedisCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleRedisCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleRedisCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.crossClusterReplicationConfig">crossClusterReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference">GoogleRedisClusterCrossClusterReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.discoveryEndpoints">discoveryEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList">GoogleRedisClusterDiscoveryEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference">GoogleRedisClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList">GoogleRedisClusterMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference">GoogleRedisClusterPersistenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.preciseSizeGb">preciseSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConfigs">pscConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList">GoogleRedisClusterPscConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConnections">pscConnections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList">GoogleRedisClusterPscConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.stateInfo">stateInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList">GoogleRedisClusterStateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference">GoogleRedisClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.zoneDistributionConfig">zoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference">GoogleRedisClusterZoneDistributionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.authorizationModeInput">authorizationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.crossClusterReplicationConfigInput">crossClusterReplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.persistenceConfigInput">persistenceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConfigsInput">pscConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.redisConfigsInput">redisConfigsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.replicaCountInput">replicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.shardCountInput">shardCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.transitEncryptionModeInput">transitEncryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.zoneDistributionConfigInput">zoneDistributionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.authorizationMode">authorizationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.redisConfigs">redisConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `crossClusterReplicationConfig`<sup>Required</sup> <a name="crossClusterReplicationConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.crossClusterReplicationConfig"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigOutputReference getCrossClusterReplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference">GoogleRedisClusterCrossClusterReplicationConfigOutputReference</a>

---

##### `discoveryEndpoints`<sup>Required</sup> <a name="discoveryEndpoints" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.discoveryEndpoints"></a>

```java
public GoogleRedisClusterDiscoveryEndpointsList getDiscoveryEndpoints();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList">GoogleRedisClusterDiscoveryEndpointsList</a>

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.maintenancePolicy"></a>

```java
public GoogleRedisClusterMaintenancePolicyOutputReference getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference">GoogleRedisClusterMaintenancePolicyOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.maintenanceSchedule"></a>

```java
public GoogleRedisClusterMaintenanceScheduleList getMaintenanceSchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList">GoogleRedisClusterMaintenanceScheduleList</a>

---

##### `persistenceConfig`<sup>Required</sup> <a name="persistenceConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.persistenceConfig"></a>

```java
public GoogleRedisClusterPersistenceConfigOutputReference getPersistenceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference">GoogleRedisClusterPersistenceConfigOutputReference</a>

---

##### `preciseSizeGb`<sup>Required</sup> <a name="preciseSizeGb" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.preciseSizeGb"></a>

```java
public java.lang.Number getPreciseSizeGb();
```

- *Type:* java.lang.Number

---

##### `pscConfigs`<sup>Required</sup> <a name="pscConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConfigs"></a>

```java
public GoogleRedisClusterPscConfigsList getPscConfigs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList">GoogleRedisClusterPscConfigsList</a>

---

##### `pscConnections`<sup>Required</sup> <a name="pscConnections" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConnections"></a>

```java
public GoogleRedisClusterPscConnectionsList getPscConnections();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList">GoogleRedisClusterPscConnectionsList</a>

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateInfo`<sup>Required</sup> <a name="stateInfo" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.stateInfo"></a>

```java
public GoogleRedisClusterStateInfoList getStateInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList">GoogleRedisClusterStateInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.timeouts"></a>

```java
public GoogleRedisClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference">GoogleRedisClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `zoneDistributionConfig`<sup>Required</sup> <a name="zoneDistributionConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.zoneDistributionConfig"></a>

```java
public GoogleRedisClusterZoneDistributionConfigOutputReference getZoneDistributionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference">GoogleRedisClusterZoneDistributionConfigOutputReference</a>

---

##### `authorizationModeInput`<sup>Optional</sup> <a name="authorizationModeInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.authorizationModeInput"></a>

```java
public java.lang.String getAuthorizationModeInput();
```

- *Type:* java.lang.String

---

##### `crossClusterReplicationConfigInput`<sup>Optional</sup> <a name="crossClusterReplicationConfigInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.crossClusterReplicationConfigInput"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfig getCrossClusterReplicationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Object getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.maintenancePolicyInput"></a>

```java
public GoogleRedisClusterMaintenancePolicy getMaintenancePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `persistenceConfigInput`<sup>Optional</sup> <a name="persistenceConfigInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.persistenceConfigInput"></a>

```java
public GoogleRedisClusterPersistenceConfig getPersistenceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pscConfigsInput`<sup>Optional</sup> <a name="pscConfigsInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConfigsInput"></a>

```java
public java.lang.Object getPscConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>>

---

##### `redisConfigsInput`<sup>Optional</sup> <a name="redisConfigsInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.redisConfigsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRedisConfigsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.replicaCountInput"></a>

```java
public java.lang.Number getReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `shardCountInput`<sup>Optional</sup> <a name="shardCountInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.shardCountInput"></a>

```java
public java.lang.Number getShardCountInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>

---

##### `transitEncryptionModeInput`<sup>Optional</sup> <a name="transitEncryptionModeInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.transitEncryptionModeInput"></a>

```java
public java.lang.String getTransitEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `zoneDistributionConfigInput`<sup>Optional</sup> <a name="zoneDistributionConfigInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.zoneDistributionConfigInput"></a>

```java
public GoogleRedisClusterZoneDistributionConfig getZoneDistributionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a>

---

##### `authorizationMode`<sup>Required</sup> <a name="authorizationMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.authorizationMode"></a>

```java
public java.lang.String getAuthorizationMode();
```

- *Type:* java.lang.String

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.deletionProtectionEnabled"></a>

```java
public java.lang.Object getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `redisConfigs`<sup>Required</sup> <a name="redisConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.redisConfigs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRedisConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

---

##### `transitEncryptionMode`<sup>Required</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.transitEncryptionMode"></a>

```java
public java.lang.String getTransitEncryptionMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRedisClusterConfig <a name="GoogleRedisClusterConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterConfig;

GoogleRedisClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .pscConfigs(IResolvable)
    .pscConfigs(java.util.List<GoogleRedisClusterPscConfigs>)
    .shardCount(java.lang.Number)
//  .authorizationMode(java.lang.String)
//  .crossClusterReplicationConfig(GoogleRedisClusterCrossClusterReplicationConfig)
//  .deletionProtectionEnabled(java.lang.Boolean)
//  .deletionProtectionEnabled(IResolvable)
//  .id(java.lang.String)
//  .maintenancePolicy(GoogleRedisClusterMaintenancePolicy)
//  .name(java.lang.String)
//  .nodeType(java.lang.String)
//  .persistenceConfig(GoogleRedisClusterPersistenceConfig)
//  .project(java.lang.String)
//  .redisConfigs(java.util.Map<java.lang.String, java.lang.String>)
//  .region(java.lang.String)
//  .replicaCount(java.lang.Number)
//  .timeouts(GoogleRedisClusterTimeouts)
//  .transitEncryptionMode(java.lang.String)
//  .zoneDistributionConfig(GoogleRedisClusterZoneDistributionConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.pscConfigs">pscConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>></code> | psc_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | Required. Number of shards for the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.authorizationMode">authorizationMode</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.crossClusterReplicationConfig">crossClusterReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a></code> | cross_cluster_replication_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#id GoogleRedisCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | The nodeType for the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#project GoogleRedisCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.redisConfigs">redisConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configure Redis Cluster behavior using a subset of native Redis configuration parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.region">region</a></code> | <code>java.lang.String</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | Optional. The number of replica nodes per shard. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.zoneDistributionConfig">zoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pscConfigs`<sup>Required</sup> <a name="pscConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.pscConfigs"></a>

```java
public java.lang.Object getPscConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>>

psc_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#psc_configs GoogleRedisCluster#psc_configs}

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

Required. Number of shards for the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#shard_count GoogleRedisCluster#shard_count}

---

##### `authorizationMode`<sup>Optional</sup> <a name="authorizationMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.authorizationMode"></a>

```java
public java.lang.String getAuthorizationMode();
```

- *Type:* java.lang.String

Optional.

The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. Default value: "AUTH_MODE_DISABLED" Possible values: ["AUTH_MODE_UNSPECIFIED", "AUTH_MODE_IAM_AUTH", "AUTH_MODE_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#authorization_mode GoogleRedisCluster#authorization_mode}

---

##### `crossClusterReplicationConfig`<sup>Optional</sup> <a name="crossClusterReplicationConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.crossClusterReplicationConfig"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfig getCrossClusterReplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a>

cross_cluster_replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#cross_cluster_replication_config GoogleRedisCluster#cross_cluster_replication_config}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.deletionProtectionEnabled"></a>

```java
public java.lang.Object getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

Indicates if the cluster is deletion protected or not.
If the value if set to true, any delete cluster operation will fail.
Default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#deletion_protection_enabled GoogleRedisCluster#deletion_protection_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#id GoogleRedisCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.maintenancePolicy"></a>

```java
public GoogleRedisClusterMaintenancePolicy getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#maintenance_policy GoogleRedisCluster#maintenance_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#name GoogleRedisCluster#name}

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

The nodeType for the Redis cluster.

If not provided, REDIS_HIGHMEM_MEDIUM will be used as default Possible values: ["REDIS_SHARED_CORE_NANO", "REDIS_HIGHMEM_MEDIUM", "REDIS_HIGHMEM_XLARGE", "REDIS_STANDARD_SMALL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#node_type GoogleRedisCluster#node_type}

---

##### `persistenceConfig`<sup>Optional</sup> <a name="persistenceConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.persistenceConfig"></a>

```java
public GoogleRedisClusterPersistenceConfig getPersistenceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#persistence_config GoogleRedisCluster#persistence_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#project GoogleRedisCluster#project}.

---

##### `redisConfigs`<sup>Optional</sup> <a name="redisConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.redisConfigs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRedisConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configure Redis Cluster behavior using a subset of native Redis configuration parameters.

Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/cluster/supported-instance-configurations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#redis_configs GoogleRedisCluster#redis_configs}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#region GoogleRedisCluster#region}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

Optional. The number of replica nodes per shard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#replica_count GoogleRedisCluster#replica_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.timeouts"></a>

```java
public GoogleRedisClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#timeouts GoogleRedisCluster#timeouts}

---

##### `transitEncryptionMode`<sup>Optional</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.transitEncryptionMode"></a>

```java
public java.lang.String getTransitEncryptionMode();
```

- *Type:* java.lang.String

Optional.

The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster. Default value: "TRANSIT_ENCRYPTION_MODE_DISABLED" Possible values: ["TRANSIT_ENCRYPTION_MODE_UNSPECIFIED", "TRANSIT_ENCRYPTION_MODE_DISABLED", "TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#transit_encryption_mode GoogleRedisCluster#transit_encryption_mode}

---

##### `zoneDistributionConfig`<sup>Optional</sup> <a name="zoneDistributionConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.zoneDistributionConfig"></a>

```java
public GoogleRedisClusterZoneDistributionConfig getZoneDistributionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#zone_distribution_config GoogleRedisCluster#zone_distribution_config}

---

### GoogleRedisClusterCrossClusterReplicationConfig <a name="GoogleRedisClusterCrossClusterReplicationConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfig;

GoogleRedisClusterCrossClusterReplicationConfig.builder()
//  .clusterRole(java.lang.String)
//  .primaryCluster(GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster)
//  .secondaryClusters(IResolvable)
//  .secondaryClusters(java.util.List<GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.property.clusterRole">clusterRole</a></code> | <code>java.lang.String</code> | The role of the cluster in cross cluster replication. Supported values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.property.primaryCluster">primaryCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a></code> | primary_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.property.secondaryClusters">secondaryClusters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>></code> | secondary_clusters block. |

---

##### `clusterRole`<sup>Optional</sup> <a name="clusterRole" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.property.clusterRole"></a>

```java
public java.lang.String getClusterRole();
```

- *Type:* java.lang.String

The role of the cluster in cross cluster replication. Supported values are:.

1. 'CLUSTER_ROLE_UNSPECIFIED': This is an independent cluster that has never participated in cross cluster replication. It allows both reads and writes.
2. 'NONE': This is an independent cluster that previously participated in cross cluster replication(either as a 'PRIMARY' or 'SECONDARY' cluster). It allows both reads and writes.
3. 'PRIMARY': This cluster serves as the replication source for secondary clusters that are replicating from it. Any data written to it is automatically replicated to its secondary clusters. It allows both reads and writes.
4. 'SECONDARY': This cluster replicates data from the primary cluster. It allows only reads. Possible values: ["CLUSTER_ROLE_UNSPECIFIED", "NONE", "PRIMARY", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#cluster_role GoogleRedisCluster#cluster_role}

---

##### `primaryCluster`<sup>Optional</sup> <a name="primaryCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.property.primaryCluster"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster getPrimaryCluster();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a>

primary_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#primary_cluster GoogleRedisCluster#primary_cluster}

---

##### `secondaryClusters`<sup>Optional</sup> <a name="secondaryClusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.property.secondaryClusters"></a>

```java
public java.lang.Object getSecondaryClusters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>>

secondary_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#secondary_clusters GoogleRedisCluster#secondary_clusters}

---

### GoogleRedisClusterCrossClusterReplicationConfigMembership <a name="GoogleRedisClusterCrossClusterReplicationConfigMembership" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembership.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigMembership;

GoogleRedisClusterCrossClusterReplicationConfigMembership.builder()
    .build();
```


### GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster;

GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster.builder()
    .build();
```


### GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters;

GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters.builder()
    .build();
```


### GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster <a name="GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster;

GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster.builder()
//  .cluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The full resource path of the primary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The full resource path of the primary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#cluster GoogleRedisCluster#cluster}

---

### GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters <a name="GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters;

GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters.builder()
//  .cluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The full resource path of the secondary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The full resource path of the secondary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#cluster GoogleRedisCluster#cluster}

---

### GoogleRedisClusterDiscoveryEndpoints <a name="GoogleRedisClusterDiscoveryEndpoints" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterDiscoveryEndpoints;

GoogleRedisClusterDiscoveryEndpoints.builder()
    .build();
```


### GoogleRedisClusterDiscoveryEndpointsPscConfig <a name="GoogleRedisClusterDiscoveryEndpointsPscConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterDiscoveryEndpointsPscConfig;

GoogleRedisClusterDiscoveryEndpointsPscConfig.builder()
    .build();
```


### GoogleRedisClusterMaintenancePolicy <a name="GoogleRedisClusterMaintenancePolicy" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterMaintenancePolicy;

GoogleRedisClusterMaintenancePolicy.builder()
//  .weeklyMaintenanceWindow(IResolvable)
//  .weeklyMaintenanceWindow(java.util.List<GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>></code> | weekly_maintenance_window block. |

---

##### `weeklyMaintenanceWindow`<sup>Optional</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```java
public java.lang.Object getWeeklyMaintenanceWindow();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>>

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#weekly_maintenance_window GoogleRedisCluster#weekly_maintenance_window}

---

### GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow <a name="GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow;

GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow.builder()
    .day(java.lang.String)
    .startTime(GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.day">day</a></code> | <code>java.lang.String</code> | Required. The day of week that maintenance updates occur. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

Required. The day of week that maintenance updates occur.

* DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#day GoogleRedisCluster#day}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```java
public GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#start_time GoogleRedisCluster#start_time}

---

### GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime;

GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#hours GoogleRedisCluster#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#minutes GoogleRedisCluster#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#nanos GoogleRedisCluster#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#seconds GoogleRedisCluster#seconds}

---

### GoogleRedisClusterMaintenanceSchedule <a name="GoogleRedisClusterMaintenanceSchedule" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterMaintenanceSchedule;

GoogleRedisClusterMaintenanceSchedule.builder()
    .build();
```


### GoogleRedisClusterPersistenceConfig <a name="GoogleRedisClusterPersistenceConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterPersistenceConfig;

GoogleRedisClusterPersistenceConfig.builder()
//  .aofConfig(GoogleRedisClusterPersistenceConfigAofConfig)
//  .mode(java.lang.String)
//  .rdbConfig(GoogleRedisClusterPersistenceConfigRdbConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.property.aofConfig">aofConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a></code> | aof_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.property.rdbConfig">rdbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a></code> | rdb_config block. |

---

##### `aofConfig`<sup>Optional</sup> <a name="aofConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.property.aofConfig"></a>

```java
public GoogleRedisClusterPersistenceConfigAofConfig getAofConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a>

aof_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#aof_config GoogleRedisCluster#aof_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.

* DISABLED: 	Persistence (both backup and restore) is disabled for the cluster.
* RDB: RDB based Persistence is enabled.
* AOF: AOF based Persistence is enabled. Possible values: ["PERSISTENCE_MODE_UNSPECIFIED", "DISABLED", "RDB", "AOF"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#mode GoogleRedisCluster#mode}

---

##### `rdbConfig`<sup>Optional</sup> <a name="rdbConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.property.rdbConfig"></a>

```java
public GoogleRedisClusterPersistenceConfigRdbConfig getRdbConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a>

rdb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#rdb_config GoogleRedisCluster#rdb_config}

---

### GoogleRedisClusterPersistenceConfigAofConfig <a name="GoogleRedisClusterPersistenceConfigAofConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterPersistenceConfigAofConfig;

GoogleRedisClusterPersistenceConfigAofConfig.builder()
//  .appendFsync(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig.property.appendFsync">appendFsync</a></code> | <code>java.lang.String</code> | Optional. Available fsync modes. |

---

##### `appendFsync`<sup>Optional</sup> <a name="appendFsync" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig.property.appendFsync"></a>

```java
public java.lang.String getAppendFsync();
```

- *Type:* java.lang.String

Optional. Available fsync modes.

* NO - Do not explicitly call fsync(). Rely on OS defaults.
* EVERYSEC - Call fsync() once per second in a background thread. A balance between performance and durability.
* ALWAYS - Call fsync() for earch write command. Possible values: ["APPEND_FSYNC_UNSPECIFIED", "NO", "EVERYSEC", "ALWAYS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#append_fsync GoogleRedisCluster#append_fsync}

---

### GoogleRedisClusterPersistenceConfigRdbConfig <a name="GoogleRedisClusterPersistenceConfigRdbConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterPersistenceConfigRdbConfig;

GoogleRedisClusterPersistenceConfigRdbConfig.builder()
//  .rdbSnapshotPeriod(java.lang.String)
//  .rdbSnapshotStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig.property.rdbSnapshotPeriod">rdbSnapshotPeriod</a></code> | <code>java.lang.String</code> | Optional. Available snapshot periods for scheduling. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig.property.rdbSnapshotStartTime">rdbSnapshotStartTime</a></code> | <code>java.lang.String</code> | The time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. |

---

##### `rdbSnapshotPeriod`<sup>Optional</sup> <a name="rdbSnapshotPeriod" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig.property.rdbSnapshotPeriod"></a>

```java
public java.lang.String getRdbSnapshotPeriod();
```

- *Type:* java.lang.String

Optional. Available snapshot periods for scheduling.

* ONE_HOUR:	Snapshot every 1 hour.
* SIX_HOURS:	Snapshot every 6 hours.
* TWELVE_HOURS:	Snapshot every 12 hours.
* TWENTY_FOUR_HOURS:	Snapshot every 24 hours. Possible values: ["SNAPSHOT_PERIOD_UNSPECIFIED", "ONE_HOUR", "SIX_HOURS", "TWELVE_HOURS", "TWENTY_FOUR_HOURS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#rdb_snapshot_period GoogleRedisCluster#rdb_snapshot_period}

---

##### `rdbSnapshotStartTime`<sup>Optional</sup> <a name="rdbSnapshotStartTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig.property.rdbSnapshotStartTime"></a>

```java
public java.lang.String getRdbSnapshotStartTime();
```

- *Type:* java.lang.String

The time that the first snapshot was/will be attempted, and to which future snapshots will be aligned.

If not provided, the current time will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#rdb_snapshot_start_time GoogleRedisCluster#rdb_snapshot_start_time}

---

### GoogleRedisClusterPscConfigs <a name="GoogleRedisClusterPscConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterPscConfigs;

GoogleRedisClusterPscConfigs.builder()
    .network(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs.property.network">network</a></code> | <code>java.lang.String</code> | Required. The consumer network where the network address of the discovery endpoint will be reserved, in the form of projects/{network_project_id_or_number}/global/networks/{network_id}. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Required. The consumer network where the network address of the discovery endpoint will be reserved, in the form of projects/{network_project_id_or_number}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#network GoogleRedisCluster#network}

---

### GoogleRedisClusterPscConnections <a name="GoogleRedisClusterPscConnections" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterPscConnections;

GoogleRedisClusterPscConnections.builder()
    .build();
```


### GoogleRedisClusterStateInfo <a name="GoogleRedisClusterStateInfo" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterStateInfo;

GoogleRedisClusterStateInfo.builder()
    .build();
```


### GoogleRedisClusterStateInfoUpdateInfo <a name="GoogleRedisClusterStateInfoUpdateInfo" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterStateInfoUpdateInfo;

GoogleRedisClusterStateInfoUpdateInfo.builder()
    .build();
```


### GoogleRedisClusterTimeouts <a name="GoogleRedisClusterTimeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterTimeouts;

GoogleRedisClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#create GoogleRedisCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#delete GoogleRedisCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#update GoogleRedisCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#create GoogleRedisCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#delete GoogleRedisCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#update GoogleRedisCluster#update}.

---

### GoogleRedisClusterZoneDistributionConfig <a name="GoogleRedisClusterZoneDistributionConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterZoneDistributionConfig;

GoogleRedisClusterZoneDistributionConfig.builder()
//  .mode(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Immutable. The zone for single zone Memorystore Redis cluster. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Immutable.

The mode for zone distribution for Memorystore Redis cluster.
If not provided, MULTI_ZONE will be used as default Possible values: ["MULTI_ZONE", "SINGLE_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#mode GoogleRedisCluster#mode}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Immutable. The zone for single zone Memorystore Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_redis_cluster#zone GoogleRedisCluster#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRedisClusterCrossClusterReplicationConfigMembershipList <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList;

new GoogleRedisClusterCrossClusterReplicationConfigMembershipList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.get"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference;

new GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.primaryCluster">primaryCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList">GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.secondaryClusters">secondaryClusters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList">GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembership">GoogleRedisClusterCrossClusterReplicationConfigMembership</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryCluster`<sup>Required</sup> <a name="primaryCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.primaryCluster"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList getPrimaryCluster();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList">GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList</a>

---

##### `secondaryClusters`<sup>Required</sup> <a name="secondaryClusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.secondaryClusters"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList getSecondaryClusters();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList">GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigMembership getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembership">GoogleRedisClusterCrossClusterReplicationConfigMembership</a>

---


### GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList;

new GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.get"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference;

new GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster</a>

---


### GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList;

new GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.get"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference;

new GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters</a>

---


### GoogleRedisClusterCrossClusterReplicationConfigOutputReference <a name="GoogleRedisClusterCrossClusterReplicationConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference;

new GoogleRedisClusterCrossClusterReplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.putPrimaryCluster">putPrimaryCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.putSecondaryClusters">putSecondaryClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resetClusterRole">resetClusterRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resetPrimaryCluster">resetPrimaryCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resetSecondaryClusters">resetSecondaryClusters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrimaryCluster` <a name="putPrimaryCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.putPrimaryCluster"></a>

```java
public void putPrimaryCluster(GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.putPrimaryCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a>

---

##### `putSecondaryClusters` <a name="putSecondaryClusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.putSecondaryClusters"></a>

```java
public void putSecondaryClusters(IResolvable OR java.util.List<GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.putSecondaryClusters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>>

---

##### `resetClusterRole` <a name="resetClusterRole" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resetClusterRole"></a>

```java
public void resetClusterRole()
```

##### `resetPrimaryCluster` <a name="resetPrimaryCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resetPrimaryCluster"></a>

```java
public void resetPrimaryCluster()
```

##### `resetSecondaryClusters` <a name="resetSecondaryClusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resetSecondaryClusters"></a>

```java
public void resetSecondaryClusters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.membership">membership</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList">GoogleRedisClusterCrossClusterReplicationConfigMembershipList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.primaryCluster">primaryCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference">GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.secondaryClusters">secondaryClusters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.clusterRoleInput">clusterRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.primaryClusterInput">primaryClusterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.secondaryClustersInput">secondaryClustersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.clusterRole">clusterRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.membership"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigMembershipList getMembership();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList">GoogleRedisClusterCrossClusterReplicationConfigMembershipList</a>

---

##### `primaryCluster`<sup>Required</sup> <a name="primaryCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.primaryCluster"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference getPrimaryCluster();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference">GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference</a>

---

##### `secondaryClusters`<sup>Required</sup> <a name="secondaryClusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.secondaryClusters"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList getSecondaryClusters();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `clusterRoleInput`<sup>Optional</sup> <a name="clusterRoleInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.clusterRoleInput"></a>

```java
public java.lang.String getClusterRoleInput();
```

- *Type:* java.lang.String

---

##### `primaryClusterInput`<sup>Optional</sup> <a name="primaryClusterInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.primaryClusterInput"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster getPrimaryClusterInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a>

---

##### `secondaryClustersInput`<sup>Optional</sup> <a name="secondaryClustersInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.secondaryClustersInput"></a>

```java
public java.lang.Object getSecondaryClustersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>>

---

##### `clusterRole`<sup>Required</sup> <a name="clusterRole" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.clusterRole"></a>

```java
public java.lang.String getClusterRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a>

---


### GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference <a name="GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference;

new GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resetCluster">resetCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resetCluster"></a>

```java
public void resetCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a>

---


### GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList <a name="GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList;

new GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.get"></a>

```java
public GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>>

---


### GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference <a name="GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference;

new GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resetCluster">resetCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resetCluster"></a>

```java
public void resetCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>

---


### GoogleRedisClusterDiscoveryEndpointsList <a name="GoogleRedisClusterDiscoveryEndpointsList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterDiscoveryEndpointsList;

new GoogleRedisClusterDiscoveryEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.get"></a>

```java
public GoogleRedisClusterDiscoveryEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleRedisClusterDiscoveryEndpointsOutputReference <a name="GoogleRedisClusterDiscoveryEndpointsOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterDiscoveryEndpointsOutputReference;

new GoogleRedisClusterDiscoveryEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList">GoogleRedisClusterDiscoveryEndpointsPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints">GoogleRedisClusterDiscoveryEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `pscConfig`<sup>Required</sup> <a name="pscConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.pscConfig"></a>

```java
public GoogleRedisClusterDiscoveryEndpointsPscConfigList getPscConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList">GoogleRedisClusterDiscoveryEndpointsPscConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterDiscoveryEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints">GoogleRedisClusterDiscoveryEndpoints</a>

---


### GoogleRedisClusterDiscoveryEndpointsPscConfigList <a name="GoogleRedisClusterDiscoveryEndpointsPscConfigList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList;

new GoogleRedisClusterDiscoveryEndpointsPscConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.get"></a>

```java
public GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference <a name="GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference;

new GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig">GoogleRedisClusterDiscoveryEndpointsPscConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterDiscoveryEndpointsPscConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig">GoogleRedisClusterDiscoveryEndpointsPscConfig</a>

---


### GoogleRedisClusterMaintenancePolicyOutputReference <a name="GoogleRedisClusterMaintenancePolicyOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterMaintenancePolicyOutputReference;

new GoogleRedisClusterMaintenancePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">putWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow">resetWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeeklyMaintenanceWindow` <a name="putWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```java
public void putWeeklyMaintenanceWindow(IResolvable OR java.util.List<GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>>

---

##### `resetWeeklyMaintenanceWindow` <a name="resetWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow"></a>

```java
public void resetWeeklyMaintenanceWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">weeklyMaintenanceWindowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `weeklyMaintenanceWindow`<sup>Required</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```java
public GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList getWeeklyMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `weeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```java
public java.lang.Object getWeeklyMaintenanceWindowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterMaintenancePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a>

---


### GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList <a name="GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList;

new GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```java
public GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>>

---


### GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference;

new GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```java
public void putStartTime(GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```java
public GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```java
public GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>

---


### GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference;

new GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### GoogleRedisClusterMaintenanceScheduleList <a name="GoogleRedisClusterMaintenanceScheduleList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterMaintenanceScheduleList;

new GoogleRedisClusterMaintenanceScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.get"></a>

```java
public GoogleRedisClusterMaintenanceScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleRedisClusterMaintenanceScheduleOutputReference <a name="GoogleRedisClusterMaintenanceScheduleOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterMaintenanceScheduleOutputReference;

new GoogleRedisClusterMaintenanceScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">scheduleDeadlineTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceSchedule">GoogleRedisClusterMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `scheduleDeadlineTime`<sup>Required</sup> <a name="scheduleDeadlineTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```java
public java.lang.String getScheduleDeadlineTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterMaintenanceSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceSchedule">GoogleRedisClusterMaintenanceSchedule</a>

---


### GoogleRedisClusterPersistenceConfigAofConfigOutputReference <a name="GoogleRedisClusterPersistenceConfigAofConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference;

new GoogleRedisClusterPersistenceConfigAofConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.resetAppendFsync">resetAppendFsync</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppendFsync` <a name="resetAppendFsync" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.resetAppendFsync"></a>

```java
public void resetAppendFsync()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.appendFsyncInput">appendFsyncInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.appendFsync">appendFsync</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appendFsyncInput`<sup>Optional</sup> <a name="appendFsyncInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.appendFsyncInput"></a>

```java
public java.lang.String getAppendFsyncInput();
```

- *Type:* java.lang.String

---

##### `appendFsync`<sup>Required</sup> <a name="appendFsync" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.appendFsync"></a>

```java
public java.lang.String getAppendFsync();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterPersistenceConfigAofConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a>

---


### GoogleRedisClusterPersistenceConfigOutputReference <a name="GoogleRedisClusterPersistenceConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterPersistenceConfigOutputReference;

new GoogleRedisClusterPersistenceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putAofConfig">putAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putRdbConfig">putRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resetAofConfig">resetAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resetRdbConfig">resetRdbConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAofConfig` <a name="putAofConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putAofConfig"></a>

```java
public void putAofConfig(GoogleRedisClusterPersistenceConfigAofConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putAofConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a>

---

##### `putRdbConfig` <a name="putRdbConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putRdbConfig"></a>

```java
public void putRdbConfig(GoogleRedisClusterPersistenceConfigRdbConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putRdbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a>

---

##### `resetAofConfig` <a name="resetAofConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resetAofConfig"></a>

```java
public void resetAofConfig()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetRdbConfig` <a name="resetRdbConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resetRdbConfig"></a>

```java
public void resetRdbConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.aofConfig">aofConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference">GoogleRedisClusterPersistenceConfigAofConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.rdbConfig">rdbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference">GoogleRedisClusterPersistenceConfigRdbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.aofConfigInput">aofConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.rdbConfigInput">rdbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aofConfig`<sup>Required</sup> <a name="aofConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.aofConfig"></a>

```java
public GoogleRedisClusterPersistenceConfigAofConfigOutputReference getAofConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference">GoogleRedisClusterPersistenceConfigAofConfigOutputReference</a>

---

##### `rdbConfig`<sup>Required</sup> <a name="rdbConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.rdbConfig"></a>

```java
public GoogleRedisClusterPersistenceConfigRdbConfigOutputReference getRdbConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference">GoogleRedisClusterPersistenceConfigRdbConfigOutputReference</a>

---

##### `aofConfigInput`<sup>Optional</sup> <a name="aofConfigInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.aofConfigInput"></a>

```java
public GoogleRedisClusterPersistenceConfigAofConfig getAofConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `rdbConfigInput`<sup>Optional</sup> <a name="rdbConfigInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.rdbConfigInput"></a>

```java
public GoogleRedisClusterPersistenceConfigRdbConfig getRdbConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterPersistenceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a>

---


### GoogleRedisClusterPersistenceConfigRdbConfigOutputReference <a name="GoogleRedisClusterPersistenceConfigRdbConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference;

new GoogleRedisClusterPersistenceConfigRdbConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod">resetRdbSnapshotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime">resetRdbSnapshotStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRdbSnapshotPeriod` <a name="resetRdbSnapshotPeriod" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod"></a>

```java
public void resetRdbSnapshotPeriod()
```

##### `resetRdbSnapshotStartTime` <a name="resetRdbSnapshotStartTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime"></a>

```java
public void resetRdbSnapshotStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput">rdbSnapshotPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput">rdbSnapshotStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod">rdbSnapshotPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime">rdbSnapshotStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rdbSnapshotPeriodInput`<sup>Optional</sup> <a name="rdbSnapshotPeriodInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput"></a>

```java
public java.lang.String getRdbSnapshotPeriodInput();
```

- *Type:* java.lang.String

---

##### `rdbSnapshotStartTimeInput`<sup>Optional</sup> <a name="rdbSnapshotStartTimeInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput"></a>

```java
public java.lang.String getRdbSnapshotStartTimeInput();
```

- *Type:* java.lang.String

---

##### `rdbSnapshotPeriod`<sup>Required</sup> <a name="rdbSnapshotPeriod" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod"></a>

```java
public java.lang.String getRdbSnapshotPeriod();
```

- *Type:* java.lang.String

---

##### `rdbSnapshotStartTime`<sup>Required</sup> <a name="rdbSnapshotStartTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime"></a>

```java
public java.lang.String getRdbSnapshotStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterPersistenceConfigRdbConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a>

---


### GoogleRedisClusterPscConfigsList <a name="GoogleRedisClusterPscConfigsList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterPscConfigsList;

new GoogleRedisClusterPscConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.get"></a>

```java
public GoogleRedisClusterPscConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>>

---


### GoogleRedisClusterPscConfigsOutputReference <a name="GoogleRedisClusterPscConfigsOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterPscConfigsOutputReference;

new GoogleRedisClusterPscConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>

---


### GoogleRedisClusterPscConnectionsList <a name="GoogleRedisClusterPscConnectionsList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterPscConnectionsList;

new GoogleRedisClusterPscConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.get"></a>

```java
public GoogleRedisClusterPscConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleRedisClusterPscConnectionsOutputReference <a name="GoogleRedisClusterPscConnectionsOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterPscConnectionsOutputReference;

new GoogleRedisClusterPscConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnections">GoogleRedisClusterPscConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterPscConnections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnections">GoogleRedisClusterPscConnections</a>

---


### GoogleRedisClusterStateInfoList <a name="GoogleRedisClusterStateInfoList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterStateInfoList;

new GoogleRedisClusterStateInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.get"></a>

```java
public GoogleRedisClusterStateInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleRedisClusterStateInfoOutputReference <a name="GoogleRedisClusterStateInfoOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterStateInfoOutputReference;

new GoogleRedisClusterStateInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.updateInfo">updateInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList">GoogleRedisClusterStateInfoUpdateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfo">GoogleRedisClusterStateInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `updateInfo`<sup>Required</sup> <a name="updateInfo" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.updateInfo"></a>

```java
public GoogleRedisClusterStateInfoUpdateInfoList getUpdateInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList">GoogleRedisClusterStateInfoUpdateInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterStateInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfo">GoogleRedisClusterStateInfo</a>

---


### GoogleRedisClusterStateInfoUpdateInfoList <a name="GoogleRedisClusterStateInfoUpdateInfoList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterStateInfoUpdateInfoList;

new GoogleRedisClusterStateInfoUpdateInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.get"></a>

```java
public GoogleRedisClusterStateInfoUpdateInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleRedisClusterStateInfoUpdateInfoOutputReference <a name="GoogleRedisClusterStateInfoUpdateInfoOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference;

new GoogleRedisClusterStateInfoUpdateInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.targetReplicaCount">targetReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.targetShardCount">targetShardCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo">GoogleRedisClusterStateInfoUpdateInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetReplicaCount`<sup>Required</sup> <a name="targetReplicaCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.targetReplicaCount"></a>

```java
public java.lang.Number getTargetReplicaCount();
```

- *Type:* java.lang.Number

---

##### `targetShardCount`<sup>Required</sup> <a name="targetShardCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.targetShardCount"></a>

```java
public java.lang.Number getTargetShardCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterStateInfoUpdateInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo">GoogleRedisClusterStateInfoUpdateInfo</a>

---


### GoogleRedisClusterTimeoutsOutputReference <a name="GoogleRedisClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterTimeoutsOutputReference;

new GoogleRedisClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>

---


### GoogleRedisClusterZoneDistributionConfigOutputReference <a name="GoogleRedisClusterZoneDistributionConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster.GoogleRedisClusterZoneDistributionConfigOutputReference;

new GoogleRedisClusterZoneDistributionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resetZone"></a>

```java
public void resetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterZoneDistributionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a>

---



