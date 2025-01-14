# `googleRedisCluster` Submodule <a name="`googleRedisCluster` Submodule" id="@cdktf/provider-google-beta.googleRedisCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRedisCluster <a name="GoogleRedisCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster google_redis_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  psc_configs: typing.Union[IResolvable, typing.List[GoogleRedisClusterPscConfigs]],
  shard_count: typing.Union[int, float],
  authorization_mode: str = None,
  cross_cluster_replication_config: GoogleRedisClusterCrossClusterReplicationConfig = None,
  deletion_protection_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintenance_policy: GoogleRedisClusterMaintenancePolicy = None,
  name: str = None,
  node_type: str = None,
  persistence_config: GoogleRedisClusterPersistenceConfig = None,
  project: str = None,
  redis_configs: typing.Mapping[str] = None,
  region: str = None,
  replica_count: typing.Union[int, float] = None,
  timeouts: GoogleRedisClusterTimeouts = None,
  transit_encryption_mode: str = None,
  zone_distribution_config: GoogleRedisClusterZoneDistributionConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.pscConfigs">psc_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>]]</code> | psc_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | Required. Number of shards for the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.authorizationMode">authorization_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.crossClusterReplicationConfig">cross_cluster_replication_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a></code> | cross_cluster_replication_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#id GoogleRedisCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | The nodeType for the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.persistenceConfig">persistence_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#project GoogleRedisCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.redisConfigs">redis_configs</a></code> | <code>typing.Mapping[str]</code> | Configure Redis Cluster behavior using a subset of native Redis configuration parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.region">region</a></code> | <code>str</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | Optional. The number of replica nodes per shard. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.transitEncryptionMode">transit_encryption_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.zoneDistributionConfig">zone_distribution_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `psc_configs`<sup>Required</sup> <a name="psc_configs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.pscConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>]]

psc_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#psc_configs GoogleRedisCluster#psc_configs}

---

##### `shard_count`<sup>Required</sup> <a name="shard_count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.shardCount"></a>

- *Type:* typing.Union[int, float]

Required. Number of shards for the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#shard_count GoogleRedisCluster#shard_count}

---

##### `authorization_mode`<sup>Optional</sup> <a name="authorization_mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.authorizationMode"></a>

- *Type:* str

Optional.

The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. Default value: "AUTH_MODE_DISABLED" Possible values: ["AUTH_MODE_UNSPECIFIED", "AUTH_MODE_IAM_AUTH", "AUTH_MODE_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#authorization_mode GoogleRedisCluster#authorization_mode}

---

##### `cross_cluster_replication_config`<sup>Optional</sup> <a name="cross_cluster_replication_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.crossClusterReplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a>

cross_cluster_replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#cross_cluster_replication_config GoogleRedisCluster#cross_cluster_replication_config}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Indicates if the cluster is deletion protected or not.
If the value if set to true, any delete cluster operation will fail.
Default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#deletion_protection_enabled GoogleRedisCluster#deletion_protection_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#id GoogleRedisCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_policy`<sup>Optional</sup> <a name="maintenance_policy" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.maintenancePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#maintenance_policy GoogleRedisCluster#maintenance_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.name"></a>

- *Type:* str

Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#name GoogleRedisCluster#name}

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.nodeType"></a>

- *Type:* str

The nodeType for the Redis cluster.

If not provided, REDIS_HIGHMEM_MEDIUM will be used as default Possible values: ["REDIS_SHARED_CORE_NANO", "REDIS_HIGHMEM_MEDIUM", "REDIS_HIGHMEM_XLARGE", "REDIS_STANDARD_SMALL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#node_type GoogleRedisCluster#node_type}

---

##### `persistence_config`<sup>Optional</sup> <a name="persistence_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.persistenceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#persistence_config GoogleRedisCluster#persistence_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#project GoogleRedisCluster#project}.

---

##### `redis_configs`<sup>Optional</sup> <a name="redis_configs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.redisConfigs"></a>

- *Type:* typing.Mapping[str]

Configure Redis Cluster behavior using a subset of native Redis configuration parameters.

Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/cluster/supported-instance-configurations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#redis_configs GoogleRedisCluster#redis_configs}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.region"></a>

- *Type:* str

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#region GoogleRedisCluster#region}

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.replicaCount"></a>

- *Type:* typing.Union[int, float]

Optional. The number of replica nodes per shard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#replica_count GoogleRedisCluster#replica_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#timeouts GoogleRedisCluster#timeouts}

---

##### `transit_encryption_mode`<sup>Optional</sup> <a name="transit_encryption_mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.transitEncryptionMode"></a>

- *Type:* str

Optional.

The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster. Default value: "TRANSIT_ENCRYPTION_MODE_DISABLED" Possible values: ["TRANSIT_ENCRYPTION_MODE_UNSPECIFIED", "TRANSIT_ENCRYPTION_MODE_DISABLED", "TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#transit_encryption_mode GoogleRedisCluster#transit_encryption_mode}

---

##### `zone_distribution_config`<sup>Optional</sup> <a name="zone_distribution_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.zoneDistributionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#zone_distribution_config GoogleRedisCluster#zone_distribution_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putCrossClusterReplicationConfig">put_cross_cluster_replication_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putMaintenancePolicy">put_maintenance_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPersistenceConfig">put_persistence_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPscConfigs">put_psc_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putZoneDistributionConfig">put_zone_distribution_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetAuthorizationMode">reset_authorization_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetCrossClusterReplicationConfig">reset_cross_cluster_replication_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetDeletionProtectionEnabled">reset_deletion_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetMaintenancePolicy">reset_maintenance_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetNodeType">reset_node_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetPersistenceConfig">reset_persistence_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetRedisConfigs">reset_redis_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetReplicaCount">reset_replica_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetTransitEncryptionMode">reset_transit_encryption_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetZoneDistributionConfig">reset_zone_distribution_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cross_cluster_replication_config` <a name="put_cross_cluster_replication_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putCrossClusterReplicationConfig"></a>

```python
def put_cross_cluster_replication_config(
  cluster_role: str = None,
  primary_cluster: GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster = None,
  secondary_clusters: typing.Union[IResolvable, typing.List[GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters]] = None
) -> None
```

###### `cluster_role`<sup>Optional</sup> <a name="cluster_role" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putCrossClusterReplicationConfig.parameter.clusterRole"></a>

- *Type:* str

The role of the cluster in cross cluster replication. Supported values are:.

1. 'CLUSTER_ROLE_UNSPECIFIED': This is an independent cluster that has never participated in cross cluster replication. It allows both reads and writes.
2. 'NONE': This is an independent cluster that previously participated in cross cluster replication(either as a 'PRIMARY' or 'SECONDARY' cluster). It allows both reads and writes.
3. 'PRIMARY': This cluster serves as the replication source for secondary clusters that are replicating from it. Any data written to it is automatically replicated to its secondary clusters. It allows both reads and writes.
4. 'SECONDARY': This cluster replicates data from the primary cluster. It allows only reads. Possible values: ["CLUSTER_ROLE_UNSPECIFIED", "NONE", "PRIMARY", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#cluster_role GoogleRedisCluster#cluster_role}

---

###### `primary_cluster`<sup>Optional</sup> <a name="primary_cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putCrossClusterReplicationConfig.parameter.primaryCluster"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a>

primary_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#primary_cluster GoogleRedisCluster#primary_cluster}

---

###### `secondary_clusters`<sup>Optional</sup> <a name="secondary_clusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putCrossClusterReplicationConfig.parameter.secondaryClusters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>]]

secondary_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#secondary_clusters GoogleRedisCluster#secondary_clusters}

---

##### `put_maintenance_policy` <a name="put_maintenance_policy" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putMaintenancePolicy"></a>

```python
def put_maintenance_policy(
  weekly_maintenance_window: typing.Union[IResolvable, typing.List[GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow]] = None
) -> None
```

###### `weekly_maintenance_window`<sup>Optional</sup> <a name="weekly_maintenance_window" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putMaintenancePolicy.parameter.weeklyMaintenanceWindow"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#weekly_maintenance_window GoogleRedisCluster#weekly_maintenance_window}

---

##### `put_persistence_config` <a name="put_persistence_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPersistenceConfig"></a>

```python
def put_persistence_config(
  aof_config: GoogleRedisClusterPersistenceConfigAofConfig = None,
  mode: str = None,
  rdb_config: GoogleRedisClusterPersistenceConfigRdbConfig = None
) -> None
```

###### `aof_config`<sup>Optional</sup> <a name="aof_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPersistenceConfig.parameter.aofConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a>

aof_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#aof_config GoogleRedisCluster#aof_config}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPersistenceConfig.parameter.mode"></a>

- *Type:* str

Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.

* DISABLED: 	Persistence (both backup and restore) is disabled for the cluster.
* RDB: RDB based Persistence is enabled.
* AOF: AOF based Persistence is enabled. Possible values: ["PERSISTENCE_MODE_UNSPECIFIED", "DISABLED", "RDB", "AOF"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#mode GoogleRedisCluster#mode}

---

###### `rdb_config`<sup>Optional</sup> <a name="rdb_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPersistenceConfig.parameter.rdbConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a>

rdb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#rdb_config GoogleRedisCluster#rdb_config}

---

##### `put_psc_configs` <a name="put_psc_configs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPscConfigs"></a>

```python
def put_psc_configs(
  value: typing.Union[IResolvable, typing.List[GoogleRedisClusterPscConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPscConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#create GoogleRedisCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#delete GoogleRedisCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#update GoogleRedisCluster#update}.

---

##### `put_zone_distribution_config` <a name="put_zone_distribution_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putZoneDistributionConfig"></a>

```python
def put_zone_distribution_config(
  mode: str = None,
  zone: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putZoneDistributionConfig.parameter.mode"></a>

- *Type:* str

Immutable.

The mode for zone distribution for Memorystore Redis cluster.
If not provided, MULTI_ZONE will be used as default Possible values: ["MULTI_ZONE", "SINGLE_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#mode GoogleRedisCluster#mode}

---

###### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putZoneDistributionConfig.parameter.zone"></a>

- *Type:* str

Immutable. The zone for single zone Memorystore Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#zone GoogleRedisCluster#zone}

---

##### `reset_authorization_mode` <a name="reset_authorization_mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetAuthorizationMode"></a>

```python
def reset_authorization_mode() -> None
```

##### `reset_cross_cluster_replication_config` <a name="reset_cross_cluster_replication_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetCrossClusterReplicationConfig"></a>

```python
def reset_cross_cluster_replication_config() -> None
```

##### `reset_deletion_protection_enabled` <a name="reset_deletion_protection_enabled" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetDeletionProtectionEnabled"></a>

```python
def reset_deletion_protection_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_policy` <a name="reset_maintenance_policy" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetMaintenancePolicy"></a>

```python
def reset_maintenance_policy() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_node_type` <a name="reset_node_type" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetNodeType"></a>

```python
def reset_node_type() -> None
```

##### `reset_persistence_config` <a name="reset_persistence_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetPersistenceConfig"></a>

```python
def reset_persistence_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_redis_configs` <a name="reset_redis_configs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetRedisConfigs"></a>

```python
def reset_redis_configs() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_replica_count` <a name="reset_replica_count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetReplicaCount"></a>

```python
def reset_replica_count() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transit_encryption_mode` <a name="reset_transit_encryption_mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetTransitEncryptionMode"></a>

```python
def reset_transit_encryption_mode() -> None
```

##### `reset_zone_distribution_config` <a name="reset_zone_distribution_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetZoneDistributionConfig"></a>

```python
def reset_zone_distribution_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleRedisCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisCluster.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleRedisCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleRedisCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleRedisCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleRedisCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.crossClusterReplicationConfig">cross_cluster_replication_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference">GoogleRedisClusterCrossClusterReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.discoveryEndpoints">discovery_endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList">GoogleRedisClusterDiscoveryEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference">GoogleRedisClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList">GoogleRedisClusterMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.persistenceConfig">persistence_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference">GoogleRedisClusterPersistenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.preciseSizeGb">precise_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConfigs">psc_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList">GoogleRedisClusterPscConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConnections">psc_connections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList">GoogleRedisClusterPscConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.stateInfo">state_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList">GoogleRedisClusterStateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference">GoogleRedisClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.zoneDistributionConfig">zone_distribution_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference">GoogleRedisClusterZoneDistributionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.authorizationModeInput">authorization_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.crossClusterReplicationConfigInput">cross_cluster_replication_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.deletionProtectionEnabledInput">deletion_protection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.maintenancePolicyInput">maintenance_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.persistenceConfigInput">persistence_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConfigsInput">psc_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.redisConfigsInput">redis_configs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.replicaCountInput">replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.shardCountInput">shard_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.transitEncryptionModeInput">transit_encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.zoneDistributionConfigInput">zone_distribution_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.authorizationMode">authorization_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.redisConfigs">redis_configs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.transitEncryptionMode">transit_encryption_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `cross_cluster_replication_config`<sup>Required</sup> <a name="cross_cluster_replication_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.crossClusterReplicationConfig"></a>

```python
cross_cluster_replication_config: GoogleRedisClusterCrossClusterReplicationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference">GoogleRedisClusterCrossClusterReplicationConfigOutputReference</a>

---

##### `discovery_endpoints`<sup>Required</sup> <a name="discovery_endpoints" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.discoveryEndpoints"></a>

```python
discovery_endpoints: GoogleRedisClusterDiscoveryEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList">GoogleRedisClusterDiscoveryEndpointsList</a>

---

##### `maintenance_policy`<sup>Required</sup> <a name="maintenance_policy" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.maintenancePolicy"></a>

```python
maintenance_policy: GoogleRedisClusterMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference">GoogleRedisClusterMaintenancePolicyOutputReference</a>

---

##### `maintenance_schedule`<sup>Required</sup> <a name="maintenance_schedule" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.maintenanceSchedule"></a>

```python
maintenance_schedule: GoogleRedisClusterMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList">GoogleRedisClusterMaintenanceScheduleList</a>

---

##### `persistence_config`<sup>Required</sup> <a name="persistence_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.persistenceConfig"></a>

```python
persistence_config: GoogleRedisClusterPersistenceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference">GoogleRedisClusterPersistenceConfigOutputReference</a>

---

##### `precise_size_gb`<sup>Required</sup> <a name="precise_size_gb" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.preciseSizeGb"></a>

```python
precise_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `psc_configs`<sup>Required</sup> <a name="psc_configs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConfigs"></a>

```python
psc_configs: GoogleRedisClusterPscConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList">GoogleRedisClusterPscConfigsList</a>

---

##### `psc_connections`<sup>Required</sup> <a name="psc_connections" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConnections"></a>

```python
psc_connections: GoogleRedisClusterPscConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList">GoogleRedisClusterPscConnectionsList</a>

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_info`<sup>Required</sup> <a name="state_info" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.stateInfo"></a>

```python
state_info: GoogleRedisClusterStateInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList">GoogleRedisClusterStateInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.timeouts"></a>

```python
timeouts: GoogleRedisClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference">GoogleRedisClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `zone_distribution_config`<sup>Required</sup> <a name="zone_distribution_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.zoneDistributionConfig"></a>

```python
zone_distribution_config: GoogleRedisClusterZoneDistributionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference">GoogleRedisClusterZoneDistributionConfigOutputReference</a>

---

##### `authorization_mode_input`<sup>Optional</sup> <a name="authorization_mode_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.authorizationModeInput"></a>

```python
authorization_mode_input: str
```

- *Type:* str

---

##### `cross_cluster_replication_config_input`<sup>Optional</sup> <a name="cross_cluster_replication_config_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.crossClusterReplicationConfigInput"></a>

```python
cross_cluster_replication_config_input: GoogleRedisClusterCrossClusterReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a>

---

##### `deletion_protection_enabled_input`<sup>Optional</sup> <a name="deletion_protection_enabled_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.deletionProtectionEnabledInput"></a>

```python
deletion_protection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_policy_input`<sup>Optional</sup> <a name="maintenance_policy_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.maintenancePolicyInput"></a>

```python
maintenance_policy_input: GoogleRedisClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `persistence_config_input`<sup>Optional</sup> <a name="persistence_config_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.persistenceConfigInput"></a>

```python
persistence_config_input: GoogleRedisClusterPersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `psc_configs_input`<sup>Optional</sup> <a name="psc_configs_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConfigsInput"></a>

```python
psc_configs_input: typing.Union[IResolvable, typing.List[GoogleRedisClusterPscConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>]]

---

##### `redis_configs_input`<sup>Optional</sup> <a name="redis_configs_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.redisConfigsInput"></a>

```python
redis_configs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `replica_count_input`<sup>Optional</sup> <a name="replica_count_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.replicaCountInput"></a>

```python
replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shard_count_input`<sup>Optional</sup> <a name="shard_count_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.shardCountInput"></a>

```python
shard_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleRedisClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>]

---

##### `transit_encryption_mode_input`<sup>Optional</sup> <a name="transit_encryption_mode_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.transitEncryptionModeInput"></a>

```python
transit_encryption_mode_input: str
```

- *Type:* str

---

##### `zone_distribution_config_input`<sup>Optional</sup> <a name="zone_distribution_config_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.zoneDistributionConfigInput"></a>

```python
zone_distribution_config_input: GoogleRedisClusterZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a>

---

##### `authorization_mode`<sup>Required</sup> <a name="authorization_mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.authorizationMode"></a>

```python
authorization_mode: str
```

- *Type:* str

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `redis_configs`<sup>Required</sup> <a name="redis_configs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.redisConfigs"></a>

```python
redis_configs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replica_count`<sup>Required</sup> <a name="replica_count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shard_count`<sup>Required</sup> <a name="shard_count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.shardCount"></a>

```python
shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transit_encryption_mode`<sup>Required</sup> <a name="transit_encryption_mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.transitEncryptionMode"></a>

```python
transit_encryption_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRedisClusterConfig <a name="GoogleRedisClusterConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  psc_configs: typing.Union[IResolvable, typing.List[GoogleRedisClusterPscConfigs]],
  shard_count: typing.Union[int, float],
  authorization_mode: str = None,
  cross_cluster_replication_config: GoogleRedisClusterCrossClusterReplicationConfig = None,
  deletion_protection_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintenance_policy: GoogleRedisClusterMaintenancePolicy = None,
  name: str = None,
  node_type: str = None,
  persistence_config: GoogleRedisClusterPersistenceConfig = None,
  project: str = None,
  redis_configs: typing.Mapping[str] = None,
  region: str = None,
  replica_count: typing.Union[int, float] = None,
  timeouts: GoogleRedisClusterTimeouts = None,
  transit_encryption_mode: str = None,
  zone_distribution_config: GoogleRedisClusterZoneDistributionConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.pscConfigs">psc_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>]]</code> | psc_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | Required. Number of shards for the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.authorizationMode">authorization_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.crossClusterReplicationConfig">cross_cluster_replication_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a></code> | cross_cluster_replication_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#id GoogleRedisCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.name">name</a></code> | <code>str</code> | Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.nodeType">node_type</a></code> | <code>str</code> | The nodeType for the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.persistenceConfig">persistence_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#project GoogleRedisCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.redisConfigs">redis_configs</a></code> | <code>typing.Mapping[str]</code> | Configure Redis Cluster behavior using a subset of native Redis configuration parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.region">region</a></code> | <code>str</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | Optional. The number of replica nodes per shard. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.transitEncryptionMode">transit_encryption_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.zoneDistributionConfig">zone_distribution_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `psc_configs`<sup>Required</sup> <a name="psc_configs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.pscConfigs"></a>

```python
psc_configs: typing.Union[IResolvable, typing.List[GoogleRedisClusterPscConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>]]

psc_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#psc_configs GoogleRedisCluster#psc_configs}

---

##### `shard_count`<sup>Required</sup> <a name="shard_count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.shardCount"></a>

```python
shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Required. Number of shards for the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#shard_count GoogleRedisCluster#shard_count}

---

##### `authorization_mode`<sup>Optional</sup> <a name="authorization_mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.authorizationMode"></a>

```python
authorization_mode: str
```

- *Type:* str

Optional.

The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. Default value: "AUTH_MODE_DISABLED" Possible values: ["AUTH_MODE_UNSPECIFIED", "AUTH_MODE_IAM_AUTH", "AUTH_MODE_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#authorization_mode GoogleRedisCluster#authorization_mode}

---

##### `cross_cluster_replication_config`<sup>Optional</sup> <a name="cross_cluster_replication_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.crossClusterReplicationConfig"></a>

```python
cross_cluster_replication_config: GoogleRedisClusterCrossClusterReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a>

cross_cluster_replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#cross_cluster_replication_config GoogleRedisCluster#cross_cluster_replication_config}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Indicates if the cluster is deletion protected or not.
If the value if set to true, any delete cluster operation will fail.
Default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#deletion_protection_enabled GoogleRedisCluster#deletion_protection_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#id GoogleRedisCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_policy`<sup>Optional</sup> <a name="maintenance_policy" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.maintenancePolicy"></a>

```python
maintenance_policy: GoogleRedisClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#maintenance_policy GoogleRedisCluster#maintenance_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#name GoogleRedisCluster#name}

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

The nodeType for the Redis cluster.

If not provided, REDIS_HIGHMEM_MEDIUM will be used as default Possible values: ["REDIS_SHARED_CORE_NANO", "REDIS_HIGHMEM_MEDIUM", "REDIS_HIGHMEM_XLARGE", "REDIS_STANDARD_SMALL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#node_type GoogleRedisCluster#node_type}

---

##### `persistence_config`<sup>Optional</sup> <a name="persistence_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.persistenceConfig"></a>

```python
persistence_config: GoogleRedisClusterPersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#persistence_config GoogleRedisCluster#persistence_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#project GoogleRedisCluster#project}.

---

##### `redis_configs`<sup>Optional</sup> <a name="redis_configs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.redisConfigs"></a>

```python
redis_configs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Configure Redis Cluster behavior using a subset of native Redis configuration parameters.

Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/cluster/supported-instance-configurations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#redis_configs GoogleRedisCluster#redis_configs}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#region GoogleRedisCluster#region}

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. The number of replica nodes per shard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#replica_count GoogleRedisCluster#replica_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.timeouts"></a>

```python
timeouts: GoogleRedisClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#timeouts GoogleRedisCluster#timeouts}

---

##### `transit_encryption_mode`<sup>Optional</sup> <a name="transit_encryption_mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.transitEncryptionMode"></a>

```python
transit_encryption_mode: str
```

- *Type:* str

Optional.

The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster. Default value: "TRANSIT_ENCRYPTION_MODE_DISABLED" Possible values: ["TRANSIT_ENCRYPTION_MODE_UNSPECIFIED", "TRANSIT_ENCRYPTION_MODE_DISABLED", "TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#transit_encryption_mode GoogleRedisCluster#transit_encryption_mode}

---

##### `zone_distribution_config`<sup>Optional</sup> <a name="zone_distribution_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.zoneDistributionConfig"></a>

```python
zone_distribution_config: GoogleRedisClusterZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#zone_distribution_config GoogleRedisCluster#zone_distribution_config}

---

### GoogleRedisClusterCrossClusterReplicationConfig <a name="GoogleRedisClusterCrossClusterReplicationConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig(
  cluster_role: str = None,
  primary_cluster: GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster = None,
  secondary_clusters: typing.Union[IResolvable, typing.List[GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.property.clusterRole">cluster_role</a></code> | <code>str</code> | The role of the cluster in cross cluster replication. Supported values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.property.primaryCluster">primary_cluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a></code> | primary_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.property.secondaryClusters">secondary_clusters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>]]</code> | secondary_clusters block. |

---

##### `cluster_role`<sup>Optional</sup> <a name="cluster_role" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.property.clusterRole"></a>

```python
cluster_role: str
```

- *Type:* str

The role of the cluster in cross cluster replication. Supported values are:.

1. 'CLUSTER_ROLE_UNSPECIFIED': This is an independent cluster that has never participated in cross cluster replication. It allows both reads and writes.
2. 'NONE': This is an independent cluster that previously participated in cross cluster replication(either as a 'PRIMARY' or 'SECONDARY' cluster). It allows both reads and writes.
3. 'PRIMARY': This cluster serves as the replication source for secondary clusters that are replicating from it. Any data written to it is automatically replicated to its secondary clusters. It allows both reads and writes.
4. 'SECONDARY': This cluster replicates data from the primary cluster. It allows only reads. Possible values: ["CLUSTER_ROLE_UNSPECIFIED", "NONE", "PRIMARY", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#cluster_role GoogleRedisCluster#cluster_role}

---

##### `primary_cluster`<sup>Optional</sup> <a name="primary_cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.property.primaryCluster"></a>

```python
primary_cluster: GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a>

primary_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#primary_cluster GoogleRedisCluster#primary_cluster}

---

##### `secondary_clusters`<sup>Optional</sup> <a name="secondary_clusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig.property.secondaryClusters"></a>

```python
secondary_clusters: typing.Union[IResolvable, typing.List[GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>]]

secondary_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#secondary_clusters GoogleRedisCluster#secondary_clusters}

---

### GoogleRedisClusterCrossClusterReplicationConfigMembership <a name="GoogleRedisClusterCrossClusterReplicationConfigMembership" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembership.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembership()
```


### GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster()
```


### GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters()
```


### GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster <a name="GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster(
  cluster: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster.property.cluster">cluster</a></code> | <code>str</code> | The full resource path of the primary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The full resource path of the primary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#cluster GoogleRedisCluster#cluster}

---

### GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters <a name="GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters(
  cluster: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters.property.cluster">cluster</a></code> | <code>str</code> | The full resource path of the secondary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The full resource path of the secondary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#cluster GoogleRedisCluster#cluster}

---

### GoogleRedisClusterDiscoveryEndpoints <a name="GoogleRedisClusterDiscoveryEndpoints" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints()
```


### GoogleRedisClusterDiscoveryEndpointsPscConfig <a name="GoogleRedisClusterDiscoveryEndpointsPscConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig()
```


### GoogleRedisClusterMaintenancePolicy <a name="GoogleRedisClusterMaintenancePolicy" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterMaintenancePolicy(
  weekly_maintenance_window: typing.Union[IResolvable, typing.List[GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy.property.weeklyMaintenanceWindow">weekly_maintenance_window</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]</code> | weekly_maintenance_window block. |

---

##### `weekly_maintenance_window`<sup>Optional</sup> <a name="weekly_maintenance_window" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```python
weekly_maintenance_window: typing.Union[IResolvable, typing.List[GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#weekly_maintenance_window GoogleRedisCluster#weekly_maintenance_window}

---

### GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow <a name="GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow(
  day: str,
  start_time: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.day">day</a></code> | <code>str</code> | Required. The day of week that maintenance updates occur. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```python
day: str
```

- *Type:* str

Required. The day of week that maintenance updates occur.

* DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#day GoogleRedisCluster#day}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```python
start_time: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#start_time GoogleRedisCluster#start_time}

---

### GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#hours GoogleRedisCluster#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#minutes GoogleRedisCluster#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#nanos GoogleRedisCluster#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#seconds GoogleRedisCluster#seconds}

---

### GoogleRedisClusterMaintenanceSchedule <a name="GoogleRedisClusterMaintenanceSchedule" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterMaintenanceSchedule()
```


### GoogleRedisClusterPersistenceConfig <a name="GoogleRedisClusterPersistenceConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterPersistenceConfig(
  aof_config: GoogleRedisClusterPersistenceConfigAofConfig = None,
  mode: str = None,
  rdb_config: GoogleRedisClusterPersistenceConfigRdbConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.property.aofConfig">aof_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a></code> | aof_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.property.mode">mode</a></code> | <code>str</code> | Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.property.rdbConfig">rdb_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a></code> | rdb_config block. |

---

##### `aof_config`<sup>Optional</sup> <a name="aof_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.property.aofConfig"></a>

```python
aof_config: GoogleRedisClusterPersistenceConfigAofConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a>

aof_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#aof_config GoogleRedisCluster#aof_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.

* DISABLED: 	Persistence (both backup and restore) is disabled for the cluster.
* RDB: RDB based Persistence is enabled.
* AOF: AOF based Persistence is enabled. Possible values: ["PERSISTENCE_MODE_UNSPECIFIED", "DISABLED", "RDB", "AOF"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#mode GoogleRedisCluster#mode}

---

##### `rdb_config`<sup>Optional</sup> <a name="rdb_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig.property.rdbConfig"></a>

```python
rdb_config: GoogleRedisClusterPersistenceConfigRdbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a>

rdb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#rdb_config GoogleRedisCluster#rdb_config}

---

### GoogleRedisClusterPersistenceConfigAofConfig <a name="GoogleRedisClusterPersistenceConfigAofConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig(
  append_fsync: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig.property.appendFsync">append_fsync</a></code> | <code>str</code> | Optional. Available fsync modes. |

---

##### `append_fsync`<sup>Optional</sup> <a name="append_fsync" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig.property.appendFsync"></a>

```python
append_fsync: str
```

- *Type:* str

Optional. Available fsync modes.

* NO - Do not explicitly call fsync(). Rely on OS defaults.
* EVERYSEC - Call fsync() once per second in a background thread. A balance between performance and durability.
* ALWAYS - Call fsync() for earch write command. Possible values: ["APPEND_FSYNC_UNSPECIFIED", "NO", "EVERYSEC", "ALWAYS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#append_fsync GoogleRedisCluster#append_fsync}

---

### GoogleRedisClusterPersistenceConfigRdbConfig <a name="GoogleRedisClusterPersistenceConfigRdbConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig(
  rdb_snapshot_period: str = None,
  rdb_snapshot_start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig.property.rdbSnapshotPeriod">rdb_snapshot_period</a></code> | <code>str</code> | Optional. Available snapshot periods for scheduling. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig.property.rdbSnapshotStartTime">rdb_snapshot_start_time</a></code> | <code>str</code> | The time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. |

---

##### `rdb_snapshot_period`<sup>Optional</sup> <a name="rdb_snapshot_period" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig.property.rdbSnapshotPeriod"></a>

```python
rdb_snapshot_period: str
```

- *Type:* str

Optional. Available snapshot periods for scheduling.

* ONE_HOUR:	Snapshot every 1 hour.
* SIX_HOURS:	Snapshot every 6 hours.
* TWELVE_HOURS:	Snapshot every 12 hours.
* TWENTY_FOUR_HOURS:	Snapshot every 24 hours. Possible values: ["SNAPSHOT_PERIOD_UNSPECIFIED", "ONE_HOUR", "SIX_HOURS", "TWELVE_HOURS", "TWENTY_FOUR_HOURS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#rdb_snapshot_period GoogleRedisCluster#rdb_snapshot_period}

---

##### `rdb_snapshot_start_time`<sup>Optional</sup> <a name="rdb_snapshot_start_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig.property.rdbSnapshotStartTime"></a>

```python
rdb_snapshot_start_time: str
```

- *Type:* str

The time that the first snapshot was/will be attempted, and to which future snapshots will be aligned.

If not provided, the current time will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#rdb_snapshot_start_time GoogleRedisCluster#rdb_snapshot_start_time}

---

### GoogleRedisClusterPscConfigs <a name="GoogleRedisClusterPscConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterPscConfigs(
  network: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs.property.network">network</a></code> | <code>str</code> | Required. The consumer network where the network address of the discovery endpoint will be reserved, in the form of projects/{network_project_id_or_number}/global/networks/{network_id}. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs.property.network"></a>

```python
network: str
```

- *Type:* str

Required. The consumer network where the network address of the discovery endpoint will be reserved, in the form of projects/{network_project_id_or_number}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#network GoogleRedisCluster#network}

---

### GoogleRedisClusterPscConnections <a name="GoogleRedisClusterPscConnections" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterPscConnections()
```


### GoogleRedisClusterStateInfo <a name="GoogleRedisClusterStateInfo" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterStateInfo()
```


### GoogleRedisClusterStateInfoUpdateInfo <a name="GoogleRedisClusterStateInfoUpdateInfo" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo()
```


### GoogleRedisClusterTimeouts <a name="GoogleRedisClusterTimeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#create GoogleRedisCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#delete GoogleRedisCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#update GoogleRedisCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#create GoogleRedisCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#delete GoogleRedisCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#update GoogleRedisCluster#update}.

---

### GoogleRedisClusterZoneDistributionConfig <a name="GoogleRedisClusterZoneDistributionConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterZoneDistributionConfig(
  mode: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig.property.mode">mode</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig.property.zone">zone</a></code> | <code>str</code> | Immutable. The zone for single zone Memorystore Redis cluster. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Immutable.

The mode for zone distribution for Memorystore Redis cluster.
If not provided, MULTI_ZONE will be used as default Possible values: ["MULTI_ZONE", "SINGLE_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#mode GoogleRedisCluster#mode}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Immutable. The zone for single zone Memorystore Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#zone GoogleRedisCluster#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRedisClusterCrossClusterReplicationConfigMembershipList <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.primaryCluster">primary_cluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList">GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.secondaryClusters">secondary_clusters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList">GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembership">GoogleRedisClusterCrossClusterReplicationConfigMembership</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_cluster`<sup>Required</sup> <a name="primary_cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.primaryCluster"></a>

```python
primary_cluster: GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList">GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList</a>

---

##### `secondary_clusters`<sup>Required</sup> <a name="secondary_clusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.secondaryClusters"></a>

```python
secondary_clusters: GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList">GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterCrossClusterReplicationConfigMembership
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembership">GoogleRedisClusterCrossClusterReplicationConfigMembership</a>

---


### GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster</a>

---


### GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference <a name="GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters</a>

---


### GoogleRedisClusterCrossClusterReplicationConfigOutputReference <a name="GoogleRedisClusterCrossClusterReplicationConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.putPrimaryCluster">put_primary_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.putSecondaryClusters">put_secondary_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resetClusterRole">reset_cluster_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resetPrimaryCluster">reset_primary_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resetSecondaryClusters">reset_secondary_clusters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_primary_cluster` <a name="put_primary_cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.putPrimaryCluster"></a>

```python
def put_primary_cluster(
  cluster: str = None
) -> None
```

###### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.putPrimaryCluster.parameter.cluster"></a>

- *Type:* str

The full resource path of the primary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#cluster GoogleRedisCluster#cluster}

---

##### `put_secondary_clusters` <a name="put_secondary_clusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.putSecondaryClusters"></a>

```python
def put_secondary_clusters(
  value: typing.Union[IResolvable, typing.List[GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.putSecondaryClusters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>]]

---

##### `reset_cluster_role` <a name="reset_cluster_role" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resetClusterRole"></a>

```python
def reset_cluster_role() -> None
```

##### `reset_primary_cluster` <a name="reset_primary_cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resetPrimaryCluster"></a>

```python
def reset_primary_cluster() -> None
```

##### `reset_secondary_clusters` <a name="reset_secondary_clusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.resetSecondaryClusters"></a>

```python
def reset_secondary_clusters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.membership">membership</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList">GoogleRedisClusterCrossClusterReplicationConfigMembershipList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.primaryCluster">primary_cluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference">GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.secondaryClusters">secondary_clusters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.clusterRoleInput">cluster_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.primaryClusterInput">primary_cluster_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.secondaryClustersInput">secondary_clusters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.clusterRole">cluster_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.membership"></a>

```python
membership: GoogleRedisClusterCrossClusterReplicationConfigMembershipList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigMembershipList">GoogleRedisClusterCrossClusterReplicationConfigMembershipList</a>

---

##### `primary_cluster`<sup>Required</sup> <a name="primary_cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.primaryCluster"></a>

```python
primary_cluster: GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference">GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference</a>

---

##### `secondary_clusters`<sup>Required</sup> <a name="secondary_clusters" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.secondaryClusters"></a>

```python
secondary_clusters: GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `cluster_role_input`<sup>Optional</sup> <a name="cluster_role_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.clusterRoleInput"></a>

```python
cluster_role_input: str
```

- *Type:* str

---

##### `primary_cluster_input`<sup>Optional</sup> <a name="primary_cluster_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.primaryClusterInput"></a>

```python
primary_cluster_input: GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a>

---

##### `secondary_clusters_input`<sup>Optional</sup> <a name="secondary_clusters_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.secondaryClustersInput"></a>

```python
secondary_clusters_input: typing.Union[IResolvable, typing.List[GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>]]

---

##### `cluster_role`<sup>Required</sup> <a name="cluster_role" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.clusterRole"></a>

```python
cluster_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterCrossClusterReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfig">GoogleRedisClusterCrossClusterReplicationConfig</a>

---


### GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference <a name="GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resetCluster">reset_cluster</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster` <a name="reset_cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resetCluster"></a>

```python
def reset_cluster() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster">GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster</a>

---


### GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList <a name="GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>]]

---


### GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference <a name="GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resetCluster">reset_cluster</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster` <a name="reset_cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resetCluster"></a>

```python
def reset_cluster() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters">GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters</a>]

---


### GoogleRedisClusterDiscoveryEndpointsList <a name="GoogleRedisClusterDiscoveryEndpointsList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterDiscoveryEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleRedisClusterDiscoveryEndpointsOutputReference <a name="GoogleRedisClusterDiscoveryEndpointsOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList">GoogleRedisClusterDiscoveryEndpointsPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints">GoogleRedisClusterDiscoveryEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `psc_config`<sup>Required</sup> <a name="psc_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.pscConfig"></a>

```python
psc_config: GoogleRedisClusterDiscoveryEndpointsPscConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList">GoogleRedisClusterDiscoveryEndpointsPscConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterDiscoveryEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints">GoogleRedisClusterDiscoveryEndpoints</a>

---


### GoogleRedisClusterDiscoveryEndpointsPscConfigList <a name="GoogleRedisClusterDiscoveryEndpointsPscConfigList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference <a name="GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig">GoogleRedisClusterDiscoveryEndpointsPscConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterDiscoveryEndpointsPscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig">GoogleRedisClusterDiscoveryEndpointsPscConfig</a>

---


### GoogleRedisClusterMaintenancePolicyOutputReference <a name="GoogleRedisClusterMaintenancePolicyOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">put_weekly_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow">reset_weekly_maintenance_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_weekly_maintenance_window` <a name="put_weekly_maintenance_window" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```python
def put_weekly_maintenance_window(
  value: typing.Union[IResolvable, typing.List[GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]

---

##### `reset_weekly_maintenance_window` <a name="reset_weekly_maintenance_window" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow"></a>

```python
def reset_weekly_maintenance_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weekly_maintenance_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">weekly_maintenance_window_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `weekly_maintenance_window`<sup>Required</sup> <a name="weekly_maintenance_window" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```python
weekly_maintenance_window: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `weekly_maintenance_window_input`<sup>Optional</sup> <a name="weekly_maintenance_window_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```python
weekly_maintenance_window_input: typing.Union[IResolvable, typing.List[GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicy">GoogleRedisClusterMaintenancePolicy</a>

---


### GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList <a name="GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]

---


### GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">put_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_start_time` <a name="put_start_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```python
def put_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#hours GoogleRedisCluster#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#minutes GoogleRedisCluster#minutes}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#nanos GoogleRedisCluster#nanos}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#seconds GoogleRedisCluster#seconds}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">start_time_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```python
start_time: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```python
day_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```python
start_time_input: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]

---


### GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### GoogleRedisClusterMaintenanceScheduleList <a name="GoogleRedisClusterMaintenanceScheduleList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleRedisClusterMaintenanceScheduleOutputReference <a name="GoogleRedisClusterMaintenanceScheduleOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">schedule_deadline_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceSchedule">GoogleRedisClusterMaintenanceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `schedule_deadline_time`<sup>Required</sup> <a name="schedule_deadline_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```python
schedule_deadline_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterMaintenanceSchedule">GoogleRedisClusterMaintenanceSchedule</a>

---


### GoogleRedisClusterPersistenceConfigAofConfigOutputReference <a name="GoogleRedisClusterPersistenceConfigAofConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.resetAppendFsync">reset_append_fsync</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_append_fsync` <a name="reset_append_fsync" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.resetAppendFsync"></a>

```python
def reset_append_fsync() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.appendFsyncInput">append_fsync_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.appendFsync">append_fsync</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `append_fsync_input`<sup>Optional</sup> <a name="append_fsync_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.appendFsyncInput"></a>

```python
append_fsync_input: str
```

- *Type:* str

---

##### `append_fsync`<sup>Required</sup> <a name="append_fsync" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.appendFsync"></a>

```python
append_fsync: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterPersistenceConfigAofConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a>

---


### GoogleRedisClusterPersistenceConfigOutputReference <a name="GoogleRedisClusterPersistenceConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putAofConfig">put_aof_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putRdbConfig">put_rdb_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resetAofConfig">reset_aof_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resetRdbConfig">reset_rdb_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aof_config` <a name="put_aof_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putAofConfig"></a>

```python
def put_aof_config(
  append_fsync: str = None
) -> None
```

###### `append_fsync`<sup>Optional</sup> <a name="append_fsync" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putAofConfig.parameter.appendFsync"></a>

- *Type:* str

Optional. Available fsync modes.

* NO - Do not explicitly call fsync(). Rely on OS defaults.
* EVERYSEC - Call fsync() once per second in a background thread. A balance between performance and durability.
* ALWAYS - Call fsync() for earch write command. Possible values: ["APPEND_FSYNC_UNSPECIFIED", "NO", "EVERYSEC", "ALWAYS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#append_fsync GoogleRedisCluster#append_fsync}

---

##### `put_rdb_config` <a name="put_rdb_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putRdbConfig"></a>

```python
def put_rdb_config(
  rdb_snapshot_period: str = None,
  rdb_snapshot_start_time: str = None
) -> None
```

###### `rdb_snapshot_period`<sup>Optional</sup> <a name="rdb_snapshot_period" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putRdbConfig.parameter.rdbSnapshotPeriod"></a>

- *Type:* str

Optional. Available snapshot periods for scheduling.

* ONE_HOUR:	Snapshot every 1 hour.
* SIX_HOURS:	Snapshot every 6 hours.
* TWELVE_HOURS:	Snapshot every 12 hours.
* TWENTY_FOUR_HOURS:	Snapshot every 24 hours. Possible values: ["SNAPSHOT_PERIOD_UNSPECIFIED", "ONE_HOUR", "SIX_HOURS", "TWELVE_HOURS", "TWENTY_FOUR_HOURS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#rdb_snapshot_period GoogleRedisCluster#rdb_snapshot_period}

---

###### `rdb_snapshot_start_time`<sup>Optional</sup> <a name="rdb_snapshot_start_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.putRdbConfig.parameter.rdbSnapshotStartTime"></a>

- *Type:* str

The time that the first snapshot was/will be attempted, and to which future snapshots will be aligned.

If not provided, the current time will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_redis_cluster#rdb_snapshot_start_time GoogleRedisCluster#rdb_snapshot_start_time}

---

##### `reset_aof_config` <a name="reset_aof_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resetAofConfig"></a>

```python
def reset_aof_config() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_rdb_config` <a name="reset_rdb_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.resetRdbConfig"></a>

```python
def reset_rdb_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.aofConfig">aof_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference">GoogleRedisClusterPersistenceConfigAofConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.rdbConfig">rdb_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference">GoogleRedisClusterPersistenceConfigRdbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.aofConfigInput">aof_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.rdbConfigInput">rdb_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aof_config`<sup>Required</sup> <a name="aof_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.aofConfig"></a>

```python
aof_config: GoogleRedisClusterPersistenceConfigAofConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfigOutputReference">GoogleRedisClusterPersistenceConfigAofConfigOutputReference</a>

---

##### `rdb_config`<sup>Required</sup> <a name="rdb_config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.rdbConfig"></a>

```python
rdb_config: GoogleRedisClusterPersistenceConfigRdbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference">GoogleRedisClusterPersistenceConfigRdbConfigOutputReference</a>

---

##### `aof_config_input`<sup>Optional</sup> <a name="aof_config_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.aofConfigInput"></a>

```python
aof_config_input: GoogleRedisClusterPersistenceConfigAofConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigAofConfig">GoogleRedisClusterPersistenceConfigAofConfig</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `rdb_config_input`<sup>Optional</sup> <a name="rdb_config_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.rdbConfigInput"></a>

```python
rdb_config_input: GoogleRedisClusterPersistenceConfigRdbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterPersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfig">GoogleRedisClusterPersistenceConfig</a>

---


### GoogleRedisClusterPersistenceConfigRdbConfigOutputReference <a name="GoogleRedisClusterPersistenceConfigRdbConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod">reset_rdb_snapshot_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime">reset_rdb_snapshot_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rdb_snapshot_period` <a name="reset_rdb_snapshot_period" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod"></a>

```python
def reset_rdb_snapshot_period() -> None
```

##### `reset_rdb_snapshot_start_time` <a name="reset_rdb_snapshot_start_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime"></a>

```python
def reset_rdb_snapshot_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput">rdb_snapshot_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput">rdb_snapshot_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod">rdb_snapshot_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime">rdb_snapshot_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rdb_snapshot_period_input`<sup>Optional</sup> <a name="rdb_snapshot_period_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput"></a>

```python
rdb_snapshot_period_input: str
```

- *Type:* str

---

##### `rdb_snapshot_start_time_input`<sup>Optional</sup> <a name="rdb_snapshot_start_time_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput"></a>

```python
rdb_snapshot_start_time_input: str
```

- *Type:* str

---

##### `rdb_snapshot_period`<sup>Required</sup> <a name="rdb_snapshot_period" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod"></a>

```python
rdb_snapshot_period: str
```

- *Type:* str

---

##### `rdb_snapshot_start_time`<sup>Required</sup> <a name="rdb_snapshot_start_time" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime"></a>

```python
rdb_snapshot_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterPersistenceConfigRdbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPersistenceConfigRdbConfig">GoogleRedisClusterPersistenceConfigRdbConfig</a>

---


### GoogleRedisClusterPscConfigsList <a name="GoogleRedisClusterPscConfigsList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterPscConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterPscConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleRedisClusterPscConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>]]

---


### GoogleRedisClusterPscConfigsOutputReference <a name="GoogleRedisClusterPscConfigsOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleRedisClusterPscConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs">GoogleRedisClusterPscConfigs</a>]

---


### GoogleRedisClusterPscConnectionsList <a name="GoogleRedisClusterPscConnectionsList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterPscConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterPscConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleRedisClusterPscConnectionsOutputReference <a name="GoogleRedisClusterPscConnectionsOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnections">GoogleRedisClusterPscConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterPscConnections
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnections">GoogleRedisClusterPscConnections</a>

---


### GoogleRedisClusterStateInfoList <a name="GoogleRedisClusterStateInfoList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterStateInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterStateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleRedisClusterStateInfoOutputReference <a name="GoogleRedisClusterStateInfoOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterStateInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.updateInfo">update_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList">GoogleRedisClusterStateInfoUpdateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfo">GoogleRedisClusterStateInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `update_info`<sup>Required</sup> <a name="update_info" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.updateInfo"></a>

```python
update_info: GoogleRedisClusterStateInfoUpdateInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList">GoogleRedisClusterStateInfoUpdateInfoList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterStateInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfo">GoogleRedisClusterStateInfo</a>

---


### GoogleRedisClusterStateInfoUpdateInfoList <a name="GoogleRedisClusterStateInfoUpdateInfoList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleRedisClusterStateInfoUpdateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleRedisClusterStateInfoUpdateInfoOutputReference <a name="GoogleRedisClusterStateInfoUpdateInfoOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.targetReplicaCount">target_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.targetShardCount">target_shard_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo">GoogleRedisClusterStateInfoUpdateInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_replica_count`<sup>Required</sup> <a name="target_replica_count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.targetReplicaCount"></a>

```python
target_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_shard_count`<sup>Required</sup> <a name="target_shard_count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.targetShardCount"></a>

```python
target_shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterStateInfoUpdateInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo">GoogleRedisClusterStateInfoUpdateInfo</a>

---


### GoogleRedisClusterTimeoutsOutputReference <a name="GoogleRedisClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleRedisClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>]

---


### GoogleRedisClusterZoneDistributionConfigOutputReference <a name="GoogleRedisClusterZoneDistributionConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_redis_cluster

googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRedisClusterZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterZoneDistributionConfig">GoogleRedisClusterZoneDistributionConfig</a>

---



