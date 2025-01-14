# `googleStorageBucket` Submodule <a name="`googleStorageBucket` Submodule" id="@cdktf/provider-google-beta.googleStorageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageBucket <a name="GoogleStorageBucket" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket google_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucket(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  autoclass: GoogleStorageBucketAutoclass = None,
  cors: typing.Union[IResolvable, typing.List[GoogleStorageBucketCors]] = None,
  custom_placement_config: GoogleStorageBucketCustomPlacementConfig = None,
  default_event_based_hold: typing.Union[bool, IResolvable] = None,
  enable_object_retention: typing.Union[bool, IResolvable] = None,
  encryption: GoogleStorageBucketEncryption = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  hierarchical_namespace: GoogleStorageBucketHierarchicalNamespace = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  lifecycle_rule: typing.Union[IResolvable, typing.List[GoogleStorageBucketLifecycleRule]] = None,
  logging: GoogleStorageBucketLogging = None,
  project: str = None,
  public_access_prevention: str = None,
  requester_pays: typing.Union[bool, IResolvable] = None,
  retention_policy: GoogleStorageBucketRetentionPolicy = None,
  rpo: str = None,
  soft_delete_policy: GoogleStorageBucketSoftDeletePolicy = None,
  storage_class: str = None,
  timeouts: GoogleStorageBucketTimeouts = None,
  uniform_bucket_level_access: typing.Union[bool, IResolvable] = None,
  versioning: GoogleStorageBucketVersioning = None,
  website: GoogleStorageBucketWebsite = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.location">location</a></code> | <code>str</code> | The Google Cloud Storage location. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.cors">cors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>]]</code> | cors block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.customPlacementConfig">custom_placement_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a></code> | custom_placement_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.defaultEventBasedHold">default_event_based_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.enableObjectRetention">enable_object_retention</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a bucket, this boolean option will delete all contained objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.hierarchicalNamespace">hierarchical_namespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a></code> | hierarchical_namespace block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#id GoogleStorageBucket#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.lifecycleRule">lifecycle_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>]]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.publicAccessPrevention">public_access_prevention</a></code> | <code>str</code> | Prevents public access to a bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.requesterPays">requester_pays</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Requester Pays on a storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.rpo">rpo</a></code> | <code>str</code> | Specifies the RPO setting of bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.softDeletePolicy">soft_delete_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a></code> | soft_delete_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.storageClass">storage_class</a></code> | <code>str</code> | The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.uniformBucketLevelAccess">uniform_bucket_level_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables uniform bucket-level access on a bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.website">website</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a></code> | website block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.location"></a>

- *Type:* str

The Google Cloud Storage location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#location GoogleStorageBucket#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.name"></a>

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#name GoogleStorageBucket#name}

---

##### `autoclass`<sup>Optional</sup> <a name="autoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.autoclass"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#autoclass GoogleStorageBucket#autoclass}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.cors"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>]]

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#cors GoogleStorageBucket#cors}

---

##### `custom_placement_config`<sup>Optional</sup> <a name="custom_placement_config" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.customPlacementConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

custom_placement_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#custom_placement_config GoogleStorageBucket#custom_placement_config}

---

##### `default_event_based_hold`<sup>Optional</sup> <a name="default_event_based_hold" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.defaultEventBasedHold"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#default_event_based_hold GoogleStorageBucket#default_event_based_hold}

---

##### `enable_object_retention`<sup>Optional</sup> <a name="enable_object_retention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.enableObjectRetention"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#enable_object_retention GoogleStorageBucket#enable_object_retention}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#encryption GoogleStorageBucket#encryption}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a bucket, this boolean option will delete all contained objects.

If you try to delete a bucket that contains objects, Terraform will fail that run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#force_destroy GoogleStorageBucket#force_destroy}

---

##### `hierarchical_namespace`<sup>Optional</sup> <a name="hierarchical_namespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.hierarchicalNamespace"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

hierarchical_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#hierarchical_namespace GoogleStorageBucket#hierarchical_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#id GoogleStorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#labels GoogleStorageBucket#labels}

---

##### `lifecycle_rule`<sup>Optional</sup> <a name="lifecycle_rule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.lifecycleRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>]]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#lifecycle_rule GoogleStorageBucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#logging GoogleStorageBucket#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#project GoogleStorageBucket#project}

---

##### `public_access_prevention`<sup>Optional</sup> <a name="public_access_prevention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.publicAccessPrevention"></a>

- *Type:* str

Prevents public access to a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#public_access_prevention GoogleStorageBucket#public_access_prevention}

---

##### `requester_pays`<sup>Optional</sup> <a name="requester_pays" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.requesterPays"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Requester Pays on a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#requester_pays GoogleStorageBucket#requester_pays}

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.retentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#retention_policy GoogleStorageBucket#retention_policy}

---

##### `rpo`<sup>Optional</sup> <a name="rpo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.rpo"></a>

- *Type:* str

Specifies the RPO setting of bucket.

If set 'ASYNC_TURBO', The Turbo Replication will be enabled for the dual-region bucket. Value 'DEFAULT' will set RPO setting to default. Turbo Replication is only for buckets in dual-regions.See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#rpo GoogleStorageBucket#rpo}

---

##### `soft_delete_policy`<sup>Optional</sup> <a name="soft_delete_policy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.softDeletePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

soft_delete_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#soft_delete_policy GoogleStorageBucket#soft_delete_policy}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.storageClass"></a>

- *Type:* str

The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#storage_class GoogleStorageBucket#storage_class}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#timeouts GoogleStorageBucket#timeouts}

---

##### `uniform_bucket_level_access`<sup>Optional</sup> <a name="uniform_bucket_level_access" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.uniformBucketLevelAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables uniform bucket-level access on a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#uniform_bucket_level_access GoogleStorageBucket#uniform_bucket_level_access}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.versioning"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#versioning GoogleStorageBucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.website"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#website GoogleStorageBucket#website}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putAutoclass">put_autoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCustomPlacementConfig">put_custom_placement_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putHierarchicalNamespace">put_hierarchical_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLifecycleRule">put_lifecycle_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putRetentionPolicy">put_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putSoftDeletePolicy">put_soft_delete_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putVersioning">put_versioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putWebsite">put_website</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetAutoclass">reset_autoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetCustomPlacementConfig">reset_custom_placement_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetDefaultEventBasedHold">reset_default_event_based_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetEnableObjectRetention">reset_enable_object_retention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetHierarchicalNamespace">reset_hierarchical_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLifecycleRule">reset_lifecycle_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetPublicAccessPrevention">reset_public_access_prevention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRequesterPays">reset_requester_pays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRetentionPolicy">reset_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRpo">reset_rpo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetSoftDeletePolicy">reset_soft_delete_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetStorageClass">reset_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetUniformBucketLevelAccess">reset_uniform_bucket_level_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetVersioning">reset_versioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetWebsite">reset_website</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoclass` <a name="put_autoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putAutoclass"></a>

```python
def put_autoclass(
  enabled: typing.Union[bool, IResolvable],
  terminal_storage_class: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putAutoclass.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}

---

###### `terminal_storage_class`<sup>Optional</sup> <a name="terminal_storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putAutoclass.parameter.terminalStorageClass"></a>

- *Type:* str

The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time.

Supported values include: NEARLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#terminal_storage_class GoogleStorageBucket#terminal_storage_class}

---

##### `put_cors` <a name="put_cors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCors"></a>

```python
def put_cors(
  value: typing.Union[IResolvable, typing.List[GoogleStorageBucketCors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>]]

---

##### `put_custom_placement_config` <a name="put_custom_placement_config" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCustomPlacementConfig"></a>

```python
def put_custom_placement_config(
  data_locations: typing.List[str]
) -> None
```

###### `data_locations`<sup>Required</sup> <a name="data_locations" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCustomPlacementConfig.parameter.dataLocations"></a>

- *Type:* typing.List[str]

The list of individual regions that comprise a dual-region bucket.

See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#data_locations GoogleStorageBucket#data_locations}

---

##### `put_encryption` <a name="put_encryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putEncryption"></a>

```python
def put_encryption(
  default_kms_key_name: str
) -> None
```

###### `default_kms_key_name`<sup>Required</sup> <a name="default_kms_key_name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putEncryption.parameter.defaultKmsKeyName"></a>

- *Type:* str

A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.

You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#default_kms_key_name GoogleStorageBucket#default_kms_key_name}

---

##### `put_hierarchical_namespace` <a name="put_hierarchical_namespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putHierarchicalNamespace"></a>

```python
def put_hierarchical_namespace(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putHierarchicalNamespace.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this field true to organize bucket with logical file system structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}

---

##### `put_lifecycle_rule` <a name="put_lifecycle_rule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLifecycleRule"></a>

```python
def put_lifecycle_rule(
  value: typing.Union[IResolvable, typing.List[GoogleStorageBucketLifecycleRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLifecycleRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>]]

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLogging"></a>

```python
def put_logging(
  log_bucket: str,
  log_object_prefix: str = None
) -> None
```

###### `log_bucket`<sup>Required</sup> <a name="log_bucket" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLogging.parameter.logBucket"></a>

- *Type:* str

The bucket that will receive log objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#log_bucket GoogleStorageBucket#log_bucket}

---

###### `log_object_prefix`<sup>Optional</sup> <a name="log_object_prefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLogging.parameter.logObjectPrefix"></a>

- *Type:* str

The object prefix for log objects.

If it's not provided, by default Google Cloud Storage sets this to this bucket's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#log_object_prefix GoogleStorageBucket#log_object_prefix}

---

##### `put_retention_policy` <a name="put_retention_policy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putRetentionPolicy"></a>

```python
def put_retention_policy(
  retention_period: typing.Union[int, float],
  is_locked: typing.Union[bool, IResolvable] = None
) -> None
```

###### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putRetentionPolicy.parameter.retentionPeriod"></a>

- *Type:* typing.Union[int, float]

The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived.

The value must be less than 3,155,760,000 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#retention_period GoogleStorageBucket#retention_period}

---

###### `is_locked`<sup>Optional</sup> <a name="is_locked" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putRetentionPolicy.parameter.isLocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.

Caution: Locking a bucket is an irreversible action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#is_locked GoogleStorageBucket#is_locked}

---

##### `put_soft_delete_policy` <a name="put_soft_delete_policy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putSoftDeletePolicy"></a>

```python
def put_soft_delete_policy(
  retention_duration_seconds: typing.Union[int, float] = None
) -> None
```

###### `retention_duration_seconds`<sup>Optional</sup> <a name="retention_duration_seconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putSoftDeletePolicy.parameter.retentionDurationSeconds"></a>

- *Type:* typing.Union[int, float]

The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted.

Default value is 604800.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#retention_duration_seconds GoogleStorageBucket#retention_duration_seconds}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#create GoogleStorageBucket#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#read GoogleStorageBucket#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#update GoogleStorageBucket#update}.

---

##### `put_versioning` <a name="put_versioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putVersioning"></a>

```python
def put_versioning(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putVersioning.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set to true, versioning is fully enabled for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}

---

##### `put_website` <a name="put_website" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putWebsite"></a>

```python
def put_website(
  main_page_suffix: str = None,
  not_found_page: str = None
) -> None
```

###### `main_page_suffix`<sup>Optional</sup> <a name="main_page_suffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putWebsite.parameter.mainPageSuffix"></a>

- *Type:* str

Behaves as the bucket's directory index where missing objects are treated as potential directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#main_page_suffix GoogleStorageBucket#main_page_suffix}

---

###### `not_found_page`<sup>Optional</sup> <a name="not_found_page" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putWebsite.parameter.notFoundPage"></a>

- *Type:* str

The custom object to return when a requested resource is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#not_found_page GoogleStorageBucket#not_found_page}

---

##### `reset_autoclass` <a name="reset_autoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetAutoclass"></a>

```python
def reset_autoclass() -> None
```

##### `reset_cors` <a name="reset_cors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_custom_placement_config` <a name="reset_custom_placement_config" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetCustomPlacementConfig"></a>

```python
def reset_custom_placement_config() -> None
```

##### `reset_default_event_based_hold` <a name="reset_default_event_based_hold" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetDefaultEventBasedHold"></a>

```python
def reset_default_event_based_hold() -> None
```

##### `reset_enable_object_retention` <a name="reset_enable_object_retention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetEnableObjectRetention"></a>

```python
def reset_enable_object_retention() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_hierarchical_namespace` <a name="reset_hierarchical_namespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetHierarchicalNamespace"></a>

```python
def reset_hierarchical_namespace() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_lifecycle_rule` <a name="reset_lifecycle_rule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLifecycleRule"></a>

```python
def reset_lifecycle_rule() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_public_access_prevention` <a name="reset_public_access_prevention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetPublicAccessPrevention"></a>

```python
def reset_public_access_prevention() -> None
```

##### `reset_requester_pays` <a name="reset_requester_pays" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRequesterPays"></a>

```python
def reset_requester_pays() -> None
```

##### `reset_retention_policy` <a name="reset_retention_policy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRetentionPolicy"></a>

```python
def reset_retention_policy() -> None
```

##### `reset_rpo` <a name="reset_rpo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRpo"></a>

```python
def reset_rpo() -> None
```

##### `reset_soft_delete_policy` <a name="reset_soft_delete_policy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetSoftDeletePolicy"></a>

```python
def reset_soft_delete_policy() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_uniform_bucket_level_access` <a name="reset_uniform_bucket_level_access" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetUniformBucketLevelAccess"></a>

```python
def reset_uniform_bucket_level_access() -> None
```

##### `reset_versioning` <a name="reset_versioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetVersioning"></a>

```python
def reset_versioning() -> None
```

##### `reset_website` <a name="reset_website" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetWebsite"></a>

```python
def reset_website() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleStorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleStorageBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleStorageBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleStorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference">GoogleStorageBucketAutoclassOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList">GoogleStorageBucketCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.customPlacementConfig">custom_placement_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference">GoogleStorageBucketCustomPlacementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference">GoogleStorageBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.hierarchicalNamespace">hierarchical_namespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference">GoogleStorageBucketHierarchicalNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycleRule">lifecycle_rule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList">GoogleStorageBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference">GoogleStorageBucketLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.projectNumber">project_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference">GoogleStorageBucketRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.softDeletePolicy">soft_delete_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference">GoogleStorageBucketSoftDeletePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference">GoogleStorageBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference">GoogleStorageBucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference">GoogleStorageBucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.autoclassInput">autoclass_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.corsInput">cors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.customPlacementConfigInput">custom_placement_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.defaultEventBasedHoldInput">default_event_based_hold_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.enableObjectRetentionInput">enable_object_retention_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.encryptionInput">encryption_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.hierarchicalNamespaceInput">hierarchical_namespace_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycleRuleInput">lifecycle_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.publicAccessPreventionInput">public_access_prevention_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.requesterPaysInput">requester_pays_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.retentionPolicyInput">retention_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.rpoInput">rpo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.softDeletePolicyInput">soft_delete_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.uniformBucketLevelAccessInput">uniform_bucket_level_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.versioningInput">versioning_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.websiteInput">website_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.defaultEventBasedHold">default_event_based_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.enableObjectRetention">enable_object_retention</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.publicAccessPrevention">public_access_prevention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.requesterPays">requester_pays</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.rpo">rpo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.uniformBucketLevelAccess">uniform_bucket_level_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoclass`<sup>Required</sup> <a name="autoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.autoclass"></a>

```python
autoclass: GoogleStorageBucketAutoclassOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference">GoogleStorageBucketAutoclassOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.cors"></a>

```python
cors: GoogleStorageBucketCorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList">GoogleStorageBucketCorsList</a>

---

##### `custom_placement_config`<sup>Required</sup> <a name="custom_placement_config" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.customPlacementConfig"></a>

```python
custom_placement_config: GoogleStorageBucketCustomPlacementConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference">GoogleStorageBucketCustomPlacementConfigOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.encryption"></a>

```python
encryption: GoogleStorageBucketEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference">GoogleStorageBucketEncryptionOutputReference</a>

---

##### `hierarchical_namespace`<sup>Required</sup> <a name="hierarchical_namespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.hierarchicalNamespace"></a>

```python
hierarchical_namespace: GoogleStorageBucketHierarchicalNamespaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference">GoogleStorageBucketHierarchicalNamespaceOutputReference</a>

---

##### `lifecycle_rule`<sup>Required</sup> <a name="lifecycle_rule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycleRule"></a>

```python
lifecycle_rule: GoogleStorageBucketLifecycleRuleList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList">GoogleStorageBucketLifecycleRuleList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.logging"></a>

```python
logging: GoogleStorageBucketLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference">GoogleStorageBucketLoggingOutputReference</a>

---

##### `project_number`<sup>Required</sup> <a name="project_number" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.projectNumber"></a>

```python
project_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.retentionPolicy"></a>

```python
retention_policy: GoogleStorageBucketRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference">GoogleStorageBucketRetentionPolicyOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `soft_delete_policy`<sup>Required</sup> <a name="soft_delete_policy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.softDeletePolicy"></a>

```python
soft_delete_policy: GoogleStorageBucketSoftDeletePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference">GoogleStorageBucketSoftDeletePolicyOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.timeouts"></a>

```python
timeouts: GoogleStorageBucketTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference">GoogleStorageBucketTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.versioning"></a>

```python
versioning: GoogleStorageBucketVersioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference">GoogleStorageBucketVersioningOutputReference</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.website"></a>

```python
website: GoogleStorageBucketWebsiteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference">GoogleStorageBucketWebsiteOutputReference</a>

---

##### `autoclass_input`<sup>Optional</sup> <a name="autoclass_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.autoclassInput"></a>

```python
autoclass_input: GoogleStorageBucketAutoclass
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.corsInput"></a>

```python
cors_input: typing.Union[IResolvable, typing.List[GoogleStorageBucketCors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>]]

---

##### `custom_placement_config_input`<sup>Optional</sup> <a name="custom_placement_config_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.customPlacementConfigInput"></a>

```python
custom_placement_config_input: GoogleStorageBucketCustomPlacementConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

---

##### `default_event_based_hold_input`<sup>Optional</sup> <a name="default_event_based_hold_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.defaultEventBasedHoldInput"></a>

```python
default_event_based_hold_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_object_retention_input`<sup>Optional</sup> <a name="enable_object_retention_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.enableObjectRetentionInput"></a>

```python
enable_object_retention_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.encryptionInput"></a>

```python
encryption_input: GoogleStorageBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hierarchical_namespace_input`<sup>Optional</sup> <a name="hierarchical_namespace_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.hierarchicalNamespaceInput"></a>

```python
hierarchical_namespace_input: GoogleStorageBucketHierarchicalNamespace
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lifecycle_rule_input`<sup>Optional</sup> <a name="lifecycle_rule_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycleRuleInput"></a>

```python
lifecycle_rule_input: typing.Union[IResolvable, typing.List[GoogleStorageBucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.loggingInput"></a>

```python
logging_input: GoogleStorageBucketLogging
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `public_access_prevention_input`<sup>Optional</sup> <a name="public_access_prevention_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.publicAccessPreventionInput"></a>

```python
public_access_prevention_input: str
```

- *Type:* str

---

##### `requester_pays_input`<sup>Optional</sup> <a name="requester_pays_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.requesterPaysInput"></a>

```python
requester_pays_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_input`<sup>Optional</sup> <a name="retention_policy_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.retentionPolicyInput"></a>

```python
retention_policy_input: GoogleStorageBucketRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

---

##### `rpo_input`<sup>Optional</sup> <a name="rpo_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.rpoInput"></a>

```python
rpo_input: str
```

- *Type:* str

---

##### `soft_delete_policy_input`<sup>Optional</sup> <a name="soft_delete_policy_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.softDeletePolicyInput"></a>

```python
soft_delete_policy_input: GoogleStorageBucketSoftDeletePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleStorageBucketTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>]

---

##### `uniform_bucket_level_access_input`<sup>Optional</sup> <a name="uniform_bucket_level_access_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.uniformBucketLevelAccessInput"></a>

```python
uniform_bucket_level_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `versioning_input`<sup>Optional</sup> <a name="versioning_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.versioningInput"></a>

```python
versioning_input: GoogleStorageBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

---

##### `website_input`<sup>Optional</sup> <a name="website_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.websiteInput"></a>

```python
website_input: GoogleStorageBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

---

##### `default_event_based_hold`<sup>Required</sup> <a name="default_event_based_hold" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.defaultEventBasedHold"></a>

```python
default_event_based_hold: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_object_retention`<sup>Required</sup> <a name="enable_object_retention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.enableObjectRetention"></a>

```python
enable_object_retention: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `public_access_prevention`<sup>Required</sup> <a name="public_access_prevention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.publicAccessPrevention"></a>

```python
public_access_prevention: str
```

- *Type:* str

---

##### `requester_pays`<sup>Required</sup> <a name="requester_pays" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.requesterPays"></a>

```python
requester_pays: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rpo`<sup>Required</sup> <a name="rpo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.rpo"></a>

```python
rpo: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `uniform_bucket_level_access`<sup>Required</sup> <a name="uniform_bucket_level_access" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.uniformBucketLevelAccess"></a>

```python
uniform_bucket_level_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageBucketAutoclass <a name="GoogleStorageBucketAutoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketAutoclass(
  enabled: typing.Union[bool, IResolvable],
  terminal_storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.property.terminalStorageClass">terminal_storage_class</a></code> | <code>str</code> | The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}

---

##### `terminal_storage_class`<sup>Optional</sup> <a name="terminal_storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.property.terminalStorageClass"></a>

```python
terminal_storage_class: str
```

- *Type:* str

The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time.

Supported values include: NEARLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#terminal_storage_class GoogleStorageBucket#terminal_storage_class}

---

### GoogleStorageBucketConfig <a name="GoogleStorageBucketConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  autoclass: GoogleStorageBucketAutoclass = None,
  cors: typing.Union[IResolvable, typing.List[GoogleStorageBucketCors]] = None,
  custom_placement_config: GoogleStorageBucketCustomPlacementConfig = None,
  default_event_based_hold: typing.Union[bool, IResolvable] = None,
  enable_object_retention: typing.Union[bool, IResolvable] = None,
  encryption: GoogleStorageBucketEncryption = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  hierarchical_namespace: GoogleStorageBucketHierarchicalNamespace = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  lifecycle_rule: typing.Union[IResolvable, typing.List[GoogleStorageBucketLifecycleRule]] = None,
  logging: GoogleStorageBucketLogging = None,
  project: str = None,
  public_access_prevention: str = None,
  requester_pays: typing.Union[bool, IResolvable] = None,
  retention_policy: GoogleStorageBucketRetentionPolicy = None,
  rpo: str = None,
  soft_delete_policy: GoogleStorageBucketSoftDeletePolicy = None,
  storage_class: str = None,
  timeouts: GoogleStorageBucketTimeouts = None,
  uniform_bucket_level_access: typing.Union[bool, IResolvable] = None,
  versioning: GoogleStorageBucketVersioning = None,
  website: GoogleStorageBucketWebsite = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.location">location</a></code> | <code>str</code> | The Google Cloud Storage location. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.name">name</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.cors">cors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>]]</code> | cors block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.customPlacementConfig">custom_placement_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a></code> | custom_placement_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.defaultEventBasedHold">default_event_based_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.enableObjectRetention">enable_object_retention</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a bucket, this boolean option will delete all contained objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.hierarchicalNamespace">hierarchical_namespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a></code> | hierarchical_namespace block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#id GoogleStorageBucket#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.lifecycleRule">lifecycle_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>]]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.publicAccessPrevention">public_access_prevention</a></code> | <code>str</code> | Prevents public access to a bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.requesterPays">requester_pays</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Requester Pays on a storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.rpo">rpo</a></code> | <code>str</code> | Specifies the RPO setting of bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.softDeletePolicy">soft_delete_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a></code> | soft_delete_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.storageClass">storage_class</a></code> | <code>str</code> | The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.uniformBucketLevelAccess">uniform_bucket_level_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables uniform bucket-level access on a bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.website">website</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a></code> | website block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The Google Cloud Storage location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#location GoogleStorageBucket#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#name GoogleStorageBucket#name}

---

##### `autoclass`<sup>Optional</sup> <a name="autoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.autoclass"></a>

```python
autoclass: GoogleStorageBucketAutoclass
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#autoclass GoogleStorageBucket#autoclass}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.cors"></a>

```python
cors: typing.Union[IResolvable, typing.List[GoogleStorageBucketCors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>]]

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#cors GoogleStorageBucket#cors}

---

##### `custom_placement_config`<sup>Optional</sup> <a name="custom_placement_config" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.customPlacementConfig"></a>

```python
custom_placement_config: GoogleStorageBucketCustomPlacementConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

custom_placement_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#custom_placement_config GoogleStorageBucket#custom_placement_config}

---

##### `default_event_based_hold`<sup>Optional</sup> <a name="default_event_based_hold" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.defaultEventBasedHold"></a>

```python
default_event_based_hold: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#default_event_based_hold GoogleStorageBucket#default_event_based_hold}

---

##### `enable_object_retention`<sup>Optional</sup> <a name="enable_object_retention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.enableObjectRetention"></a>

```python
enable_object_retention: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#enable_object_retention GoogleStorageBucket#enable_object_retention}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.encryption"></a>

```python
encryption: GoogleStorageBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#encryption GoogleStorageBucket#encryption}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a bucket, this boolean option will delete all contained objects.

If you try to delete a bucket that contains objects, Terraform will fail that run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#force_destroy GoogleStorageBucket#force_destroy}

---

##### `hierarchical_namespace`<sup>Optional</sup> <a name="hierarchical_namespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.hierarchicalNamespace"></a>

```python
hierarchical_namespace: GoogleStorageBucketHierarchicalNamespace
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

hierarchical_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#hierarchical_namespace GoogleStorageBucket#hierarchical_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#id GoogleStorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#labels GoogleStorageBucket#labels}

---

##### `lifecycle_rule`<sup>Optional</sup> <a name="lifecycle_rule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.lifecycleRule"></a>

```python
lifecycle_rule: typing.Union[IResolvable, typing.List[GoogleStorageBucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>]]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#lifecycle_rule GoogleStorageBucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.logging"></a>

```python
logging: GoogleStorageBucketLogging
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#logging GoogleStorageBucket#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#project GoogleStorageBucket#project}

---

##### `public_access_prevention`<sup>Optional</sup> <a name="public_access_prevention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.publicAccessPrevention"></a>

```python
public_access_prevention: str
```

- *Type:* str

Prevents public access to a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#public_access_prevention GoogleStorageBucket#public_access_prevention}

---

##### `requester_pays`<sup>Optional</sup> <a name="requester_pays" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.requesterPays"></a>

```python
requester_pays: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Requester Pays on a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#requester_pays GoogleStorageBucket#requester_pays}

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.retentionPolicy"></a>

```python
retention_policy: GoogleStorageBucketRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#retention_policy GoogleStorageBucket#retention_policy}

---

##### `rpo`<sup>Optional</sup> <a name="rpo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.rpo"></a>

```python
rpo: str
```

- *Type:* str

Specifies the RPO setting of bucket.

If set 'ASYNC_TURBO', The Turbo Replication will be enabled for the dual-region bucket. Value 'DEFAULT' will set RPO setting to default. Turbo Replication is only for buckets in dual-regions.See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#rpo GoogleStorageBucket#rpo}

---

##### `soft_delete_policy`<sup>Optional</sup> <a name="soft_delete_policy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.softDeletePolicy"></a>

```python
soft_delete_policy: GoogleStorageBucketSoftDeletePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

soft_delete_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#soft_delete_policy GoogleStorageBucket#soft_delete_policy}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#storage_class GoogleStorageBucket#storage_class}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.timeouts"></a>

```python
timeouts: GoogleStorageBucketTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#timeouts GoogleStorageBucket#timeouts}

---

##### `uniform_bucket_level_access`<sup>Optional</sup> <a name="uniform_bucket_level_access" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.uniformBucketLevelAccess"></a>

```python
uniform_bucket_level_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables uniform bucket-level access on a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#uniform_bucket_level_access GoogleStorageBucket#uniform_bucket_level_access}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.versioning"></a>

```python
versioning: GoogleStorageBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#versioning GoogleStorageBucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.website"></a>

```python
website: GoogleStorageBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#website GoogleStorageBucket#website}

---

### GoogleStorageBucketCors <a name="GoogleStorageBucketCors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketCors(
  max_age_seconds: typing.Union[int, float] = None,
  method: typing.List[str] = None,
  origin: typing.List[str] = None,
  response_header: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.method">method</a></code> | <code>typing.List[str]</code> | The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.origin">origin</a></code> | <code>typing.List[str]</code> | The list of Origins eligible to receive CORS response headers. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.responseHeader">response_header</a></code> | <code>typing.List[str]</code> | The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. |

---

##### `max_age_seconds`<sup>Optional</sup> <a name="max_age_seconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#max_age_seconds GoogleStorageBucket#max_age_seconds}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.method"></a>

```python
method: typing.List[str]
```

- *Type:* typing.List[str]

The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#method GoogleStorageBucket#method}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.origin"></a>

```python
origin: typing.List[str]
```

- *Type:* typing.List[str]

The list of Origins eligible to receive CORS response headers.

Note: "*" is permitted in the list of origins, and means "any Origin".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#origin GoogleStorageBucket#origin}

---

##### `response_header`<sup>Optional</sup> <a name="response_header" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.responseHeader"></a>

```python
response_header: typing.List[str]
```

- *Type:* typing.List[str]

The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#response_header GoogleStorageBucket#response_header}

---

### GoogleStorageBucketCustomPlacementConfig <a name="GoogleStorageBucketCustomPlacementConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketCustomPlacementConfig(
  data_locations: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig.property.dataLocations">data_locations</a></code> | <code>typing.List[str]</code> | The list of individual regions that comprise a dual-region bucket. |

---

##### `data_locations`<sup>Required</sup> <a name="data_locations" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig.property.dataLocations"></a>

```python
data_locations: typing.List[str]
```

- *Type:* typing.List[str]

The list of individual regions that comprise a dual-region bucket.

See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#data_locations GoogleStorageBucket#data_locations}

---

### GoogleStorageBucketEncryption <a name="GoogleStorageBucketEncryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketEncryption(
  default_kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption.property.defaultKmsKeyName">default_kms_key_name</a></code> | <code>str</code> | A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. |

---

##### `default_kms_key_name`<sup>Required</sup> <a name="default_kms_key_name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption.property.defaultKmsKeyName"></a>

```python
default_kms_key_name: str
```

- *Type:* str

A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.

You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#default_kms_key_name GoogleStorageBucket#default_kms_key_name}

---

### GoogleStorageBucketHierarchicalNamespace <a name="GoogleStorageBucketHierarchicalNamespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketHierarchicalNamespace(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this field true to organize bucket with logical file system structure. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this field true to organize bucket with logical file system structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}

---

### GoogleStorageBucketLifecycleRule <a name="GoogleStorageBucketLifecycleRule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketLifecycleRule(
  action: GoogleStorageBucketLifecycleRuleAction,
  condition: GoogleStorageBucketLifecycleRuleCondition
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a></code> | condition block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.property.action"></a>

```python
action: GoogleStorageBucketLifecycleRuleAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#action GoogleStorageBucket#action}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.property.condition"></a>

```python
condition: GoogleStorageBucketLifecycleRuleCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#condition GoogleStorageBucket#condition}

---

### GoogleStorageBucketLifecycleRuleAction <a name="GoogleStorageBucketLifecycleRuleAction" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketLifecycleRuleAction(
  type: str,
  storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.property.type">type</a></code> | <code>str</code> | The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.property.storageClass">storage_class</a></code> | <code>str</code> | The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#type GoogleStorageBucket#type}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#storage_class GoogleStorageBucket#storage_class}

---

### GoogleStorageBucketLifecycleRuleCondition <a name="GoogleStorageBucketLifecycleRuleCondition" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition(
  age: typing.Union[int, float] = None,
  created_before: str = None,
  custom_time_before: str = None,
  days_since_custom_time: typing.Union[int, float] = None,
  days_since_noncurrent_time: typing.Union[int, float] = None,
  matches_prefix: typing.List[str] = None,
  matches_storage_class: typing.List[str] = None,
  matches_suffix: typing.List[str] = None,
  noncurrent_time_before: str = None,
  num_newer_versions: typing.Union[int, float] = None,
  send_age_if_zero: typing.Union[bool, IResolvable] = None,
  send_days_since_custom_time_if_zero: typing.Union[bool, IResolvable] = None,
  send_days_since_noncurrent_time_if_zero: typing.Union[bool, IResolvable] = None,
  send_num_newer_versions_if_zero: typing.Union[bool, IResolvable] = None,
  with_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.age">age</a></code> | <code>typing.Union[int, float]</code> | Minimum age of an object in days to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.createdBefore">created_before</a></code> | <code>str</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.customTimeBefore">custom_time_before</a></code> | <code>str</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.daysSinceCustomTime">days_since_custom_time</a></code> | <code>typing.Union[int, float]</code> | Number of days elapsed since the user-specified timestamp set on an object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime">days_since_noncurrent_time</a></code> | <code>typing.Union[int, float]</code> | Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesPrefix">matches_prefix</a></code> | <code>typing.List[str]</code> | One or more matching name prefixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesStorageClass">matches_storage_class</a></code> | <code>typing.List[str]</code> | Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesSuffix">matches_suffix</a></code> | <code>typing.List[str]</code> | One or more matching name suffixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore">noncurrent_time_before</a></code> | <code>str</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.numNewerVersions">num_newer_versions</a></code> | <code>typing.Union[int, float]</code> | Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendAgeIfZero">send_age_if_zero</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | While set true, age value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendDaysSinceCustomTimeIfZero">send_days_since_custom_time_if_zero</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | While set true, days_since_custom_time value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendDaysSinceNoncurrentTimeIfZero">send_days_since_noncurrent_time_if_zero</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendNumNewerVersionsIfZero">send_num_newer_versions_if_zero</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | While set true, num_newer_versions value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.withState">with_state</a></code> | <code>str</code> | Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY". |

---

##### `age`<sup>Optional</sup> <a name="age" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.age"></a>

```python
age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum age of an object in days to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#age GoogleStorageBucket#age}

---

##### `created_before`<sup>Optional</sup> <a name="created_before" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.createdBefore"></a>

```python
created_before: str
```

- *Type:* str

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#created_before GoogleStorageBucket#created_before}

---

##### `custom_time_before`<sup>Optional</sup> <a name="custom_time_before" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.customTimeBefore"></a>

```python
custom_time_before: str
```

- *Type:* str

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#custom_time_before GoogleStorageBucket#custom_time_before}

---

##### `days_since_custom_time`<sup>Optional</sup> <a name="days_since_custom_time" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.daysSinceCustomTime"></a>

```python
days_since_custom_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days elapsed since the user-specified timestamp set on an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#days_since_custom_time GoogleStorageBucket#days_since_custom_time}

---

##### `days_since_noncurrent_time`<sup>Optional</sup> <a name="days_since_noncurrent_time" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime"></a>

```python
days_since_noncurrent_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#days_since_noncurrent_time GoogleStorageBucket#days_since_noncurrent_time}

---

##### `matches_prefix`<sup>Optional</sup> <a name="matches_prefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesPrefix"></a>

```python
matches_prefix: typing.List[str]
```

- *Type:* typing.List[str]

One or more matching name prefixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#matches_prefix GoogleStorageBucket#matches_prefix}

---

##### `matches_storage_class`<sup>Optional</sup> <a name="matches_storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesStorageClass"></a>

```python
matches_storage_class: typing.List[str]
```

- *Type:* typing.List[str]

Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#matches_storage_class GoogleStorageBucket#matches_storage_class}

---

##### `matches_suffix`<sup>Optional</sup> <a name="matches_suffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesSuffix"></a>

```python
matches_suffix: typing.List[str]
```

- *Type:* typing.List[str]

One or more matching name suffixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#matches_suffix GoogleStorageBucket#matches_suffix}

---

##### `noncurrent_time_before`<sup>Optional</sup> <a name="noncurrent_time_before" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore"></a>

```python
noncurrent_time_before: str
```

- *Type:* str

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#noncurrent_time_before GoogleStorageBucket#noncurrent_time_before}

---

##### `num_newer_versions`<sup>Optional</sup> <a name="num_newer_versions" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.numNewerVersions"></a>

```python
num_newer_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#num_newer_versions GoogleStorageBucket#num_newer_versions}

---

##### `send_age_if_zero`<sup>Optional</sup> <a name="send_age_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendAgeIfZero"></a>

```python
send_age_if_zero: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set true, age value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the age field. It can be used alone or together with age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#send_age_if_zero GoogleStorageBucket#send_age_if_zero}

---

##### `send_days_since_custom_time_if_zero`<sup>Optional</sup> <a name="send_days_since_custom_time_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendDaysSinceCustomTimeIfZero"></a>

```python
send_days_since_custom_time_if_zero: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set true, days_since_custom_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_custom_time field. It can be used alone or together with days_since_custom_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#send_days_since_custom_time_if_zero GoogleStorageBucket#send_days_since_custom_time_if_zero}

---

##### `send_days_since_noncurrent_time_if_zero`<sup>Optional</sup> <a name="send_days_since_noncurrent_time_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```python
send_days_since_noncurrent_time_if_zero: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_noncurrent_time field. It can be used alone or together with days_since_noncurrent_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#send_days_since_noncurrent_time_if_zero GoogleStorageBucket#send_days_since_noncurrent_time_if_zero}

---

##### `send_num_newer_versions_if_zero`<sup>Optional</sup> <a name="send_num_newer_versions_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendNumNewerVersionsIfZero"></a>

```python
send_num_newer_versions_if_zero: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set true, num_newer_versions value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the num_newer_versions field. It can be used alone or together with num_newer_versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#send_num_newer_versions_if_zero GoogleStorageBucket#send_num_newer_versions_if_zero}

---

##### `with_state`<sup>Optional</sup> <a name="with_state" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.withState"></a>

```python
with_state: str
```

- *Type:* str

Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#with_state GoogleStorageBucket#with_state}

---

### GoogleStorageBucketLogging <a name="GoogleStorageBucketLogging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketLogging(
  log_bucket: str,
  log_object_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.property.logBucket">log_bucket</a></code> | <code>str</code> | The bucket that will receive log objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.property.logObjectPrefix">log_object_prefix</a></code> | <code>str</code> | The object prefix for log objects. |

---

##### `log_bucket`<sup>Required</sup> <a name="log_bucket" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.property.logBucket"></a>

```python
log_bucket: str
```

- *Type:* str

The bucket that will receive log objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#log_bucket GoogleStorageBucket#log_bucket}

---

##### `log_object_prefix`<sup>Optional</sup> <a name="log_object_prefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.property.logObjectPrefix"></a>

```python
log_object_prefix: str
```

- *Type:* str

The object prefix for log objects.

If it's not provided, by default Google Cloud Storage sets this to this bucket's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#log_object_prefix GoogleStorageBucket#log_object_prefix}

---

### GoogleStorageBucketRetentionPolicy <a name="GoogleStorageBucketRetentionPolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketRetentionPolicy(
  retention_period: typing.Union[int, float],
  is_locked: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.property.isLocked">is_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy. |

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived.

The value must be less than 3,155,760,000 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#retention_period GoogleStorageBucket#retention_period}

---

##### `is_locked`<sup>Optional</sup> <a name="is_locked" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.property.isLocked"></a>

```python
is_locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.

Caution: Locking a bucket is an irreversible action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#is_locked GoogleStorageBucket#is_locked}

---

### GoogleStorageBucketSoftDeletePolicy <a name="GoogleStorageBucketSoftDeletePolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketSoftDeletePolicy(
  retention_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy.property.retentionDurationSeconds">retention_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. |

---

##### `retention_duration_seconds`<sup>Optional</sup> <a name="retention_duration_seconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy.property.retentionDurationSeconds"></a>

```python
retention_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted.

Default value is 604800.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#retention_duration_seconds GoogleStorageBucket#retention_duration_seconds}

---

### GoogleStorageBucketTimeouts <a name="GoogleStorageBucketTimeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#create GoogleStorageBucket#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#read GoogleStorageBucket#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#update GoogleStorageBucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#create GoogleStorageBucket#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#read GoogleStorageBucket#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#update GoogleStorageBucket#update}.

---

### GoogleStorageBucketVersioning <a name="GoogleStorageBucketVersioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketVersioning(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | While set to true, versioning is fully enabled for this bucket. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set to true, versioning is fully enabled for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}

---

### GoogleStorageBucketWebsite <a name="GoogleStorageBucketWebsite" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketWebsite(
  main_page_suffix: str = None,
  not_found_page: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.property.mainPageSuffix">main_page_suffix</a></code> | <code>str</code> | Behaves as the bucket's directory index where missing objects are treated as potential directories. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.property.notFoundPage">not_found_page</a></code> | <code>str</code> | The custom object to return when a requested resource is not found. |

---

##### `main_page_suffix`<sup>Optional</sup> <a name="main_page_suffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.property.mainPageSuffix"></a>

```python
main_page_suffix: str
```

- *Type:* str

Behaves as the bucket's directory index where missing objects are treated as potential directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#main_page_suffix GoogleStorageBucket#main_page_suffix}

---

##### `not_found_page`<sup>Optional</sup> <a name="not_found_page" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.property.notFoundPage"></a>

```python
not_found_page: str
```

- *Type:* str

The custom object to return when a requested resource is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#not_found_page GoogleStorageBucket#not_found_page}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageBucketAutoclassOutputReference <a name="GoogleStorageBucketAutoclassOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketAutoclassOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resetTerminalStorageClass">reset_terminal_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_terminal_storage_class` <a name="reset_terminal_storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resetTerminalStorageClass"></a>

```python
def reset_terminal_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.terminalStorageClassInput">terminal_storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.terminalStorageClass">terminal_storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terminal_storage_class_input`<sup>Optional</sup> <a name="terminal_storage_class_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.terminalStorageClassInput"></a>

```python
terminal_storage_class_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terminal_storage_class`<sup>Required</sup> <a name="terminal_storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.terminalStorageClass"></a>

```python
terminal_storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketAutoclass
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

---


### GoogleStorageBucketCorsList <a name="GoogleStorageBucketCorsList" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketCorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageBucketCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleStorageBucketCors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>]]

---


### GoogleStorageBucketCorsOutputReference <a name="GoogleStorageBucketCorsOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetMaxAgeSeconds">reset_max_age_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetOrigin">reset_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetResponseHeader">reset_response_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_age_seconds` <a name="reset_max_age_seconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetMaxAgeSeconds"></a>

```python
def reset_max_age_seconds() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_origin` <a name="reset_origin" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetOrigin"></a>

```python
def reset_origin() -> None
```

##### `reset_response_header` <a name="reset_response_header" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetResponseHeader"></a>

```python
def reset_response_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.maxAgeSecondsInput">max_age_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.methodInput">method_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.originInput">origin_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.responseHeaderInput">response_header_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.method">method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.origin">origin</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.responseHeader">response_header</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_age_seconds_input`<sup>Optional</sup> <a name="max_age_seconds_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.maxAgeSecondsInput"></a>

```python
max_age_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.methodInput"></a>

```python
method_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `origin_input`<sup>Optional</sup> <a name="origin_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.originInput"></a>

```python
origin_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_header_input`<sup>Optional</sup> <a name="response_header_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.responseHeaderInput"></a>

```python
response_header_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds`<sup>Required</sup> <a name="max_age_seconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.method"></a>

```python
method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.origin"></a>

```python
origin: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_header`<sup>Required</sup> <a name="response_header" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.responseHeader"></a>

```python
response_header: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleStorageBucketCors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>]

---


### GoogleStorageBucketCustomPlacementConfigOutputReference <a name="GoogleStorageBucketCustomPlacementConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput">data_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocations">data_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_locations_input`<sup>Optional</sup> <a name="data_locations_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput"></a>

```python
data_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_locations`<sup>Required</sup> <a name="data_locations" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocations"></a>

```python
data_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketCustomPlacementConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

---


### GoogleStorageBucketEncryptionOutputReference <a name="GoogleStorageBucketEncryptionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput">default_kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyName">default_kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_kms_key_name_input`<sup>Optional</sup> <a name="default_kms_key_name_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput"></a>

```python
default_kms_key_name_input: str
```

- *Type:* str

---

##### `default_kms_key_name`<sup>Required</sup> <a name="default_kms_key_name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyName"></a>

```python
default_kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

---


### GoogleStorageBucketHierarchicalNamespaceOutputReference <a name="GoogleStorageBucketHierarchicalNamespaceOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketHierarchicalNamespace
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

---


### GoogleStorageBucketLifecycleRuleActionOutputReference <a name="GoogleStorageBucketLifecycleRuleActionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketLifecycleRuleAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a>

---


### GoogleStorageBucketLifecycleRuleConditionOutputReference <a name="GoogleStorageBucketLifecycleRuleConditionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetAge">reset_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore">reset_created_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore">reset_custom_time_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime">reset_days_since_custom_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime">reset_days_since_noncurrent_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix">reset_matches_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass">reset_matches_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix">reset_matches_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore">reset_noncurrent_time_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions">reset_num_newer_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendAgeIfZero">reset_send_age_if_zero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceCustomTimeIfZero">reset_send_days_since_custom_time_if_zero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceNoncurrentTimeIfZero">reset_send_days_since_noncurrent_time_if_zero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendNumNewerVersionsIfZero">reset_send_num_newer_versions_if_zero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetWithState">reset_with_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_age` <a name="reset_age" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetAge"></a>

```python
def reset_age() -> None
```

##### `reset_created_before` <a name="reset_created_before" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore"></a>

```python
def reset_created_before() -> None
```

##### `reset_custom_time_before` <a name="reset_custom_time_before" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore"></a>

```python
def reset_custom_time_before() -> None
```

##### `reset_days_since_custom_time` <a name="reset_days_since_custom_time" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime"></a>

```python
def reset_days_since_custom_time() -> None
```

##### `reset_days_since_noncurrent_time` <a name="reset_days_since_noncurrent_time" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime"></a>

```python
def reset_days_since_noncurrent_time() -> None
```

##### `reset_matches_prefix` <a name="reset_matches_prefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix"></a>

```python
def reset_matches_prefix() -> None
```

##### `reset_matches_storage_class` <a name="reset_matches_storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass"></a>

```python
def reset_matches_storage_class() -> None
```

##### `reset_matches_suffix` <a name="reset_matches_suffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix"></a>

```python
def reset_matches_suffix() -> None
```

##### `reset_noncurrent_time_before` <a name="reset_noncurrent_time_before" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore"></a>

```python
def reset_noncurrent_time_before() -> None
```

##### `reset_num_newer_versions` <a name="reset_num_newer_versions" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions"></a>

```python
def reset_num_newer_versions() -> None
```

##### `reset_send_age_if_zero` <a name="reset_send_age_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendAgeIfZero"></a>

```python
def reset_send_age_if_zero() -> None
```

##### `reset_send_days_since_custom_time_if_zero` <a name="reset_send_days_since_custom_time_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceCustomTimeIfZero"></a>

```python
def reset_send_days_since_custom_time_if_zero() -> None
```

##### `reset_send_days_since_noncurrent_time_if_zero` <a name="reset_send_days_since_noncurrent_time_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceNoncurrentTimeIfZero"></a>

```python
def reset_send_days_since_noncurrent_time_if_zero() -> None
```

##### `reset_send_num_newer_versions_if_zero` <a name="reset_send_num_newer_versions_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendNumNewerVersionsIfZero"></a>

```python
def reset_send_num_newer_versions_if_zero() -> None
```

##### `reset_with_state` <a name="reset_with_state" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetWithState"></a>

```python
def reset_with_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.ageInput">age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput">created_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput">custom_time_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput">days_since_custom_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput">days_since_noncurrent_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput">matches_prefix_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput">matches_storage_class_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput">matches_suffix_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput">noncurrent_time_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput">num_newer_versions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZeroInput">send_age_if_zero_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZeroInput">send_days_since_custom_time_if_zero_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZeroInput">send_days_since_noncurrent_time_if_zero_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZeroInput">send_num_newer_versions_if_zero_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.withStateInput">with_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.age">age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBefore">created_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore">custom_time_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime">days_since_custom_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime">days_since_noncurrent_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix">matches_prefix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass">matches_storage_class</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix">matches_suffix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore">noncurrent_time_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions">num_newer_versions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero">send_age_if_zero</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero">send_days_since_custom_time_if_zero</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero">send_days_since_noncurrent_time_if_zero</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero">send_num_newer_versions_if_zero</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.withState">with_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `age_input`<sup>Optional</sup> <a name="age_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.ageInput"></a>

```python
age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_before_input`<sup>Optional</sup> <a name="created_before_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput"></a>

```python
created_before_input: str
```

- *Type:* str

---

##### `custom_time_before_input`<sup>Optional</sup> <a name="custom_time_before_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput"></a>

```python
custom_time_before_input: str
```

- *Type:* str

---

##### `days_since_custom_time_input`<sup>Optional</sup> <a name="days_since_custom_time_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput"></a>

```python
days_since_custom_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_since_noncurrent_time_input`<sup>Optional</sup> <a name="days_since_noncurrent_time_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput"></a>

```python
days_since_noncurrent_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matches_prefix_input`<sup>Optional</sup> <a name="matches_prefix_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput"></a>

```python
matches_prefix_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matches_storage_class_input`<sup>Optional</sup> <a name="matches_storage_class_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput"></a>

```python
matches_storage_class_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matches_suffix_input`<sup>Optional</sup> <a name="matches_suffix_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput"></a>

```python
matches_suffix_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `noncurrent_time_before_input`<sup>Optional</sup> <a name="noncurrent_time_before_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput"></a>

```python
noncurrent_time_before_input: str
```

- *Type:* str

---

##### `num_newer_versions_input`<sup>Optional</sup> <a name="num_newer_versions_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput"></a>

```python
num_newer_versions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `send_age_if_zero_input`<sup>Optional</sup> <a name="send_age_if_zero_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZeroInput"></a>

```python
send_age_if_zero_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_days_since_custom_time_if_zero_input`<sup>Optional</sup> <a name="send_days_since_custom_time_if_zero_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZeroInput"></a>

```python
send_days_since_custom_time_if_zero_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_days_since_noncurrent_time_if_zero_input`<sup>Optional</sup> <a name="send_days_since_noncurrent_time_if_zero_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZeroInput"></a>

```python
send_days_since_noncurrent_time_if_zero_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_num_newer_versions_if_zero_input`<sup>Optional</sup> <a name="send_num_newer_versions_if_zero_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZeroInput"></a>

```python
send_num_newer_versions_if_zero_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_state_input`<sup>Optional</sup> <a name="with_state_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.withStateInput"></a>

```python
with_state_input: str
```

- *Type:* str

---

##### `age`<sup>Required</sup> <a name="age" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.age"></a>

```python
age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_before`<sup>Required</sup> <a name="created_before" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBefore"></a>

```python
created_before: str
```

- *Type:* str

---

##### `custom_time_before`<sup>Required</sup> <a name="custom_time_before" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore"></a>

```python
custom_time_before: str
```

- *Type:* str

---

##### `days_since_custom_time`<sup>Required</sup> <a name="days_since_custom_time" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime"></a>

```python
days_since_custom_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_since_noncurrent_time`<sup>Required</sup> <a name="days_since_noncurrent_time" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime"></a>

```python
days_since_noncurrent_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matches_prefix`<sup>Required</sup> <a name="matches_prefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix"></a>

```python
matches_prefix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matches_storage_class`<sup>Required</sup> <a name="matches_storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass"></a>

```python
matches_storage_class: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matches_suffix`<sup>Required</sup> <a name="matches_suffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix"></a>

```python
matches_suffix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `noncurrent_time_before`<sup>Required</sup> <a name="noncurrent_time_before" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore"></a>

```python
noncurrent_time_before: str
```

- *Type:* str

---

##### `num_newer_versions`<sup>Required</sup> <a name="num_newer_versions" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions"></a>

```python
num_newer_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `send_age_if_zero`<sup>Required</sup> <a name="send_age_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero"></a>

```python
send_age_if_zero: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_days_since_custom_time_if_zero`<sup>Required</sup> <a name="send_days_since_custom_time_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero"></a>

```python
send_days_since_custom_time_if_zero: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_days_since_noncurrent_time_if_zero`<sup>Required</sup> <a name="send_days_since_noncurrent_time_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```python
send_days_since_noncurrent_time_if_zero: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_num_newer_versions_if_zero`<sup>Required</sup> <a name="send_num_newer_versions_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero"></a>

```python
send_num_newer_versions_if_zero: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_state`<sup>Required</sup> <a name="with_state" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.withState"></a>

```python
with_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketLifecycleRuleCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a>

---


### GoogleStorageBucketLifecycleRuleList <a name="GoogleStorageBucketLifecycleRuleList" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketLifecycleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageBucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleStorageBucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>]]

---


### GoogleStorageBucketLifecycleRuleOutputReference <a name="GoogleStorageBucketLifecycleRuleOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition">put_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putAction"></a>

```python
def put_action(
  type: str,
  storage_class: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putAction.parameter.type"></a>

- *Type:* str

The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#type GoogleStorageBucket#type}

---

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putAction.parameter.storageClass"></a>

- *Type:* str

The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#storage_class GoogleStorageBucket#storage_class}

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition"></a>

```python
def put_condition(
  age: typing.Union[int, float] = None,
  created_before: str = None,
  custom_time_before: str = None,
  days_since_custom_time: typing.Union[int, float] = None,
  days_since_noncurrent_time: typing.Union[int, float] = None,
  matches_prefix: typing.List[str] = None,
  matches_storage_class: typing.List[str] = None,
  matches_suffix: typing.List[str] = None,
  noncurrent_time_before: str = None,
  num_newer_versions: typing.Union[int, float] = None,
  send_age_if_zero: typing.Union[bool, IResolvable] = None,
  send_days_since_custom_time_if_zero: typing.Union[bool, IResolvable] = None,
  send_days_since_noncurrent_time_if_zero: typing.Union[bool, IResolvable] = None,
  send_num_newer_versions_if_zero: typing.Union[bool, IResolvable] = None,
  with_state: str = None
) -> None
```

###### `age`<sup>Optional</sup> <a name="age" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.age"></a>

- *Type:* typing.Union[int, float]

Minimum age of an object in days to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#age GoogleStorageBucket#age}

---

###### `created_before`<sup>Optional</sup> <a name="created_before" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.createdBefore"></a>

- *Type:* str

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#created_before GoogleStorageBucket#created_before}

---

###### `custom_time_before`<sup>Optional</sup> <a name="custom_time_before" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.customTimeBefore"></a>

- *Type:* str

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#custom_time_before GoogleStorageBucket#custom_time_before}

---

###### `days_since_custom_time`<sup>Optional</sup> <a name="days_since_custom_time" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.daysSinceCustomTime"></a>

- *Type:* typing.Union[int, float]

Number of days elapsed since the user-specified timestamp set on an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#days_since_custom_time GoogleStorageBucket#days_since_custom_time}

---

###### `days_since_noncurrent_time`<sup>Optional</sup> <a name="days_since_noncurrent_time" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.daysSinceNoncurrentTime"></a>

- *Type:* typing.Union[int, float]

Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#days_since_noncurrent_time GoogleStorageBucket#days_since_noncurrent_time}

---

###### `matches_prefix`<sup>Optional</sup> <a name="matches_prefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.matchesPrefix"></a>

- *Type:* typing.List[str]

One or more matching name prefixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#matches_prefix GoogleStorageBucket#matches_prefix}

---

###### `matches_storage_class`<sup>Optional</sup> <a name="matches_storage_class" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.matchesStorageClass"></a>

- *Type:* typing.List[str]

Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#matches_storage_class GoogleStorageBucket#matches_storage_class}

---

###### `matches_suffix`<sup>Optional</sup> <a name="matches_suffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.matchesSuffix"></a>

- *Type:* typing.List[str]

One or more matching name suffixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#matches_suffix GoogleStorageBucket#matches_suffix}

---

###### `noncurrent_time_before`<sup>Optional</sup> <a name="noncurrent_time_before" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.noncurrentTimeBefore"></a>

- *Type:* str

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#noncurrent_time_before GoogleStorageBucket#noncurrent_time_before}

---

###### `num_newer_versions`<sup>Optional</sup> <a name="num_newer_versions" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.numNewerVersions"></a>

- *Type:* typing.Union[int, float]

Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#num_newer_versions GoogleStorageBucket#num_newer_versions}

---

###### `send_age_if_zero`<sup>Optional</sup> <a name="send_age_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.sendAgeIfZero"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set true, age value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the age field. It can be used alone or together with age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#send_age_if_zero GoogleStorageBucket#send_age_if_zero}

---

###### `send_days_since_custom_time_if_zero`<sup>Optional</sup> <a name="send_days_since_custom_time_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.sendDaysSinceCustomTimeIfZero"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set true, days_since_custom_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_custom_time field. It can be used alone or together with days_since_custom_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#send_days_since_custom_time_if_zero GoogleStorageBucket#send_days_since_custom_time_if_zero}

---

###### `send_days_since_noncurrent_time_if_zero`<sup>Optional</sup> <a name="send_days_since_noncurrent_time_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.sendDaysSinceNoncurrentTimeIfZero"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_noncurrent_time field. It can be used alone or together with days_since_noncurrent_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#send_days_since_noncurrent_time_if_zero GoogleStorageBucket#send_days_since_noncurrent_time_if_zero}

---

###### `send_num_newer_versions_if_zero`<sup>Optional</sup> <a name="send_num_newer_versions_if_zero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.sendNumNewerVersionsIfZero"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

While set true, num_newer_versions value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the num_newer_versions field. It can be used alone or together with num_newer_versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#send_num_newer_versions_if_zero GoogleStorageBucket#send_num_newer_versions_if_zero}

---

###### `with_state`<sup>Optional</sup> <a name="with_state" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.withState"></a>

- *Type:* str

Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_storage_bucket#with_state GoogleStorageBucket#with_state}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference">GoogleStorageBucketLifecycleRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference">GoogleStorageBucketLifecycleRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.action"></a>

```python
action: GoogleStorageBucketLifecycleRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference">GoogleStorageBucketLifecycleRuleActionOutputReference</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.condition"></a>

```python
condition: GoogleStorageBucketLifecycleRuleConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference">GoogleStorageBucketLifecycleRuleConditionOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.actionInput"></a>

```python
action_input: GoogleStorageBucketLifecycleRuleAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.conditionInput"></a>

```python
condition_input: GoogleStorageBucketLifecycleRuleCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleStorageBucketLifecycleRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>]

---


### GoogleStorageBucketLoggingOutputReference <a name="GoogleStorageBucketLoggingOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resetLogObjectPrefix">reset_log_object_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_object_prefix` <a name="reset_log_object_prefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resetLogObjectPrefix"></a>

```python
def reset_log_object_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logBucketInput">log_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logObjectPrefixInput">log_object_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logBucket">log_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logObjectPrefix">log_object_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_bucket_input`<sup>Optional</sup> <a name="log_bucket_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logBucketInput"></a>

```python
log_bucket_input: str
```

- *Type:* str

---

##### `log_object_prefix_input`<sup>Optional</sup> <a name="log_object_prefix_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logObjectPrefixInput"></a>

```python
log_object_prefix_input: str
```

- *Type:* str

---

##### `log_bucket`<sup>Required</sup> <a name="log_bucket" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logBucket"></a>

```python
log_bucket: str
```

- *Type:* str

---

##### `log_object_prefix`<sup>Required</sup> <a name="log_object_prefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logObjectPrefix"></a>

```python
log_object_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketLogging
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

---


### GoogleStorageBucketRetentionPolicyOutputReference <a name="GoogleStorageBucketRetentionPolicyOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resetIsLocked">reset_is_locked</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_locked` <a name="reset_is_locked" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resetIsLocked"></a>

```python
def reset_is_locked() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.isLockedInput">is_locked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput">retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.isLocked">is_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_locked_input`<sup>Optional</sup> <a name="is_locked_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.isLockedInput"></a>

```python
is_locked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput"></a>

```python
retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_locked`<sup>Required</sup> <a name="is_locked" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.isLocked"></a>

```python
is_locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

---


### GoogleStorageBucketSoftDeletePolicyOutputReference <a name="GoogleStorageBucketSoftDeletePolicyOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resetRetentionDurationSeconds">reset_retention_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_duration_seconds` <a name="reset_retention_duration_seconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resetRetentionDurationSeconds"></a>

```python
def reset_retention_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.effectiveTime">effective_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSecondsInput">retention_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds">retention_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_time`<sup>Required</sup> <a name="effective_time" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.effectiveTime"></a>

```python
effective_time: str
```

- *Type:* str

---

##### `retention_duration_seconds_input`<sup>Optional</sup> <a name="retention_duration_seconds_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSecondsInput"></a>

```python
retention_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_duration_seconds`<sup>Required</sup> <a name="retention_duration_seconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds"></a>

```python
retention_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketSoftDeletePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

---


### GoogleStorageBucketTimeoutsOutputReference <a name="GoogleStorageBucketTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleStorageBucketTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>]

---


### GoogleStorageBucketVersioningOutputReference <a name="GoogleStorageBucketVersioningOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketVersioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

---


### GoogleStorageBucketWebsiteOutputReference <a name="GoogleStorageBucketWebsiteOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket

googleStorageBucket.GoogleStorageBucketWebsiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resetMainPageSuffix">reset_main_page_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resetNotFoundPage">reset_not_found_page</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_main_page_suffix` <a name="reset_main_page_suffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resetMainPageSuffix"></a>

```python
def reset_main_page_suffix() -> None
```

##### `reset_not_found_page` <a name="reset_not_found_page" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resetNotFoundPage"></a>

```python
def reset_not_found_page() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.mainPageSuffixInput">main_page_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.notFoundPageInput">not_found_page_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.mainPageSuffix">main_page_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.notFoundPage">not_found_page</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `main_page_suffix_input`<sup>Optional</sup> <a name="main_page_suffix_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.mainPageSuffixInput"></a>

```python
main_page_suffix_input: str
```

- *Type:* str

---

##### `not_found_page_input`<sup>Optional</sup> <a name="not_found_page_input" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.notFoundPageInput"></a>

```python
not_found_page_input: str
```

- *Type:* str

---

##### `main_page_suffix`<sup>Required</sup> <a name="main_page_suffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.mainPageSuffix"></a>

```python
main_page_suffix: str
```

- *Type:* str

---

##### `not_found_page`<sup>Required</sup> <a name="not_found_page" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.notFoundPage"></a>

```python
not_found_page: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

---



