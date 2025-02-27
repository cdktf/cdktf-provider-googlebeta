# `googleStorageBucket` Submodule <a name="`googleStorageBucket` Submodule" id="@cdktf/provider-google-beta.googleStorageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageBucket <a name="GoogleStorageBucket" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket google_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucket;

GoogleStorageBucket.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
//  .autoclass(GoogleStorageBucketAutoclass)
//  .cors(IResolvable)
//  .cors(java.util.List<GoogleStorageBucketCors>)
//  .customPlacementConfig(GoogleStorageBucketCustomPlacementConfig)
//  .defaultEventBasedHold(java.lang.Boolean)
//  .defaultEventBasedHold(IResolvable)
//  .enableObjectRetention(java.lang.Boolean)
//  .enableObjectRetention(IResolvable)
//  .encryption(GoogleStorageBucketEncryption)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .hierarchicalNamespace(GoogleStorageBucketHierarchicalNamespace)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .lifecycleRule(IResolvable)
//  .lifecycleRule(java.util.List<GoogleStorageBucketLifecycleRule>)
//  .logging(GoogleStorageBucketLogging)
//  .project(java.lang.String)
//  .publicAccessPrevention(java.lang.String)
//  .requesterPays(java.lang.Boolean)
//  .requesterPays(IResolvable)
//  .retentionPolicy(GoogleStorageBucketRetentionPolicy)
//  .rpo(java.lang.String)
//  .softDeletePolicy(GoogleStorageBucketSoftDeletePolicy)
//  .storageClass(java.lang.String)
//  .timeouts(GoogleStorageBucketTimeouts)
//  .uniformBucketLevelAccess(java.lang.Boolean)
//  .uniformBucketLevelAccess(IResolvable)
//  .versioning(GoogleStorageBucketVersioning)
//  .website(GoogleStorageBucketWebsite)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The Google Cloud Storage location. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.cors">cors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>></code> | cors block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.customPlacementConfig">customPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a></code> | custom_placement_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.defaultEventBasedHold">defaultEventBasedHold</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.enableObjectRetention">enableObjectRetention</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When deleting a bucket, this boolean option will delete all contained objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.hierarchicalNamespace">hierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a></code> | hierarchical_namespace block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#id GoogleStorageBucket#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.lifecycleRule">lifecycleRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>></code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.publicAccessPrevention">publicAccessPrevention</a></code> | <code>java.lang.String</code> | Prevents public access to a bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables Requester Pays on a storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.rpo">rpo</a></code> | <code>java.lang.String</code> | Specifies the RPO setting of bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.softDeletePolicy">softDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a></code> | soft_delete_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.uniformBucketLevelAccess">uniformBucketLevelAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables uniform bucket-level access on a bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.website">website</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a></code> | website block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The Google Cloud Storage location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#location GoogleStorageBucket#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#name GoogleStorageBucket#name}

---

##### `autoclass`<sup>Optional</sup> <a name="autoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.autoclass"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#autoclass GoogleStorageBucket#autoclass}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.cors"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#cors GoogleStorageBucket#cors}

---

##### `customPlacementConfig`<sup>Optional</sup> <a name="customPlacementConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.customPlacementConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

custom_placement_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#custom_placement_config GoogleStorageBucket#custom_placement_config}

---

##### `defaultEventBasedHold`<sup>Optional</sup> <a name="defaultEventBasedHold" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.defaultEventBasedHold"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#default_event_based_hold GoogleStorageBucket#default_event_based_hold}

---

##### `enableObjectRetention`<sup>Optional</sup> <a name="enableObjectRetention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.enableObjectRetention"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#enable_object_retention GoogleStorageBucket#enable_object_retention}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#encryption GoogleStorageBucket#encryption}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When deleting a bucket, this boolean option will delete all contained objects.

If you try to delete a bucket that contains objects, Terraform will fail that run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#force_destroy GoogleStorageBucket#force_destroy}

---

##### `hierarchicalNamespace`<sup>Optional</sup> <a name="hierarchicalNamespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.hierarchicalNamespace"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

hierarchical_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#hierarchical_namespace GoogleStorageBucket#hierarchical_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#id GoogleStorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#labels GoogleStorageBucket#labels}

---

##### `lifecycleRule`<sup>Optional</sup> <a name="lifecycleRule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.lifecycleRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>>

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#lifecycle_rule GoogleStorageBucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#logging GoogleStorageBucket#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#project GoogleStorageBucket#project}

---

##### `publicAccessPrevention`<sup>Optional</sup> <a name="publicAccessPrevention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.publicAccessPrevention"></a>

- *Type:* java.lang.String

Prevents public access to a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#public_access_prevention GoogleStorageBucket#public_access_prevention}

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.requesterPays"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables Requester Pays on a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#requester_pays GoogleStorageBucket#requester_pays}

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.retentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#retention_policy GoogleStorageBucket#retention_policy}

---

##### `rpo`<sup>Optional</sup> <a name="rpo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.rpo"></a>

- *Type:* java.lang.String

Specifies the RPO setting of bucket.

If set 'ASYNC_TURBO', The Turbo Replication will be enabled for the dual-region bucket. Value 'DEFAULT' will set RPO setting to default. Turbo Replication is only for buckets in dual-regions.See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#rpo GoogleStorageBucket#rpo}

---

##### `softDeletePolicy`<sup>Optional</sup> <a name="softDeletePolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.softDeletePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

soft_delete_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#soft_delete_policy GoogleStorageBucket#soft_delete_policy}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.storageClass"></a>

- *Type:* java.lang.String

The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#storage_class GoogleStorageBucket#storage_class}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#timeouts GoogleStorageBucket#timeouts}

---

##### `uniformBucketLevelAccess`<sup>Optional</sup> <a name="uniformBucketLevelAccess" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.uniformBucketLevelAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables uniform bucket-level access on a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#uniform_bucket_level_access GoogleStorageBucket#uniform_bucket_level_access}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.versioning"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#versioning GoogleStorageBucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.website"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#website GoogleStorageBucket#website}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putAutoclass">putAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCustomPlacementConfig">putCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putHierarchicalNamespace">putHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLifecycleRule">putLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putSoftDeletePolicy">putSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putVersioning">putVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putWebsite">putWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetAutoclass">resetAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetCustomPlacementConfig">resetCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetDefaultEventBasedHold">resetDefaultEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetEnableObjectRetention">resetEnableObjectRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetHierarchicalNamespace">resetHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLifecycleRule">resetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetPublicAccessPrevention">resetPublicAccessPrevention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRequesterPays">resetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRpo">resetRpo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetSoftDeletePolicy">resetSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetUniformBucketLevelAccess">resetUniformBucketLevelAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetVersioning">resetVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetWebsite">resetWebsite</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoclass` <a name="putAutoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putAutoclass"></a>

```java
public void putAutoclass(GoogleStorageBucketAutoclass value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putAutoclass.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

---

##### `putCors` <a name="putCors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCors"></a>

```java
public void putCors(IResolvable OR java.util.List<GoogleStorageBucketCors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>>

---

##### `putCustomPlacementConfig` <a name="putCustomPlacementConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCustomPlacementConfig"></a>

```java
public void putCustomPlacementConfig(GoogleStorageBucketCustomPlacementConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCustomPlacementConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

---

##### `putEncryption` <a name="putEncryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putEncryption"></a>

```java
public void putEncryption(GoogleStorageBucketEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

---

##### `putHierarchicalNamespace` <a name="putHierarchicalNamespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putHierarchicalNamespace"></a>

```java
public void putHierarchicalNamespace(GoogleStorageBucketHierarchicalNamespace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putHierarchicalNamespace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

---

##### `putLifecycleRule` <a name="putLifecycleRule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLifecycleRule"></a>

```java
public void putLifecycleRule(IResolvable OR java.util.List<GoogleStorageBucketLifecycleRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLifecycleRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>>

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLogging"></a>

```java
public void putLogging(GoogleStorageBucketLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

---

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putRetentionPolicy"></a>

```java
public void putRetentionPolicy(GoogleStorageBucketRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

---

##### `putSoftDeletePolicy` <a name="putSoftDeletePolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putSoftDeletePolicy"></a>

```java
public void putSoftDeletePolicy(GoogleStorageBucketSoftDeletePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putSoftDeletePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putTimeouts"></a>

```java
public void putTimeouts(GoogleStorageBucketTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>

---

##### `putVersioning` <a name="putVersioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putVersioning"></a>

```java
public void putVersioning(GoogleStorageBucketVersioning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putVersioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

---

##### `putWebsite` <a name="putWebsite" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putWebsite"></a>

```java
public void putWebsite(GoogleStorageBucketWebsite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

---

##### `resetAutoclass` <a name="resetAutoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetAutoclass"></a>

```java
public void resetAutoclass()
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetCors"></a>

```java
public void resetCors()
```

##### `resetCustomPlacementConfig` <a name="resetCustomPlacementConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetCustomPlacementConfig"></a>

```java
public void resetCustomPlacementConfig()
```

##### `resetDefaultEventBasedHold` <a name="resetDefaultEventBasedHold" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetDefaultEventBasedHold"></a>

```java
public void resetDefaultEventBasedHold()
```

##### `resetEnableObjectRetention` <a name="resetEnableObjectRetention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetEnableObjectRetention"></a>

```java
public void resetEnableObjectRetention()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetHierarchicalNamespace` <a name="resetHierarchicalNamespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetHierarchicalNamespace"></a>

```java
public void resetHierarchicalNamespace()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLifecycleRule` <a name="resetLifecycleRule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLifecycleRule"></a>

```java
public void resetLifecycleRule()
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLogging"></a>

```java
public void resetLogging()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetProject"></a>

```java
public void resetProject()
```

##### `resetPublicAccessPrevention` <a name="resetPublicAccessPrevention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetPublicAccessPrevention"></a>

```java
public void resetPublicAccessPrevention()
```

##### `resetRequesterPays` <a name="resetRequesterPays" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRequesterPays"></a>

```java
public void resetRequesterPays()
```

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRetentionPolicy"></a>

```java
public void resetRetentionPolicy()
```

##### `resetRpo` <a name="resetRpo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRpo"></a>

```java
public void resetRpo()
```

##### `resetSoftDeletePolicy` <a name="resetSoftDeletePolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetSoftDeletePolicy"></a>

```java
public void resetSoftDeletePolicy()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetStorageClass"></a>

```java
public void resetStorageClass()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUniformBucketLevelAccess` <a name="resetUniformBucketLevelAccess" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetUniformBucketLevelAccess"></a>

```java
public void resetUniformBucketLevelAccess()
```

##### `resetVersioning` <a name="resetVersioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetVersioning"></a>

```java
public void resetVersioning()
```

##### `resetWebsite` <a name="resetWebsite" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetWebsite"></a>

```java
public void resetWebsite()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucket;

GoogleStorageBucket.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucket;

GoogleStorageBucket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucket;

GoogleStorageBucket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucket;

GoogleStorageBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleStorageBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleStorageBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleStorageBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleStorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference">GoogleStorageBucketAutoclassOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList">GoogleStorageBucketCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.customPlacementConfig">customPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference">GoogleStorageBucketCustomPlacementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference">GoogleStorageBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.hierarchicalNamespace">hierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference">GoogleStorageBucketHierarchicalNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycleRule">lifecycleRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList">GoogleStorageBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference">GoogleStorageBucketLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.projectNumber">projectNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference">GoogleStorageBucketRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.softDeletePolicy">softDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference">GoogleStorageBucketSoftDeletePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference">GoogleStorageBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference">GoogleStorageBucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference">GoogleStorageBucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.autoclassInput">autoclassInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.corsInput">corsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.customPlacementConfigInput">customPlacementConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.defaultEventBasedHoldInput">defaultEventBasedHoldInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.enableObjectRetentionInput">enableObjectRetentionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.encryptionInput">encryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.hierarchicalNamespaceInput">hierarchicalNamespaceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycleRuleInput">lifecycleRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.publicAccessPreventionInput">publicAccessPreventionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.requesterPaysInput">requesterPaysInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.rpoInput">rpoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.softDeletePolicyInput">softDeletePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.uniformBucketLevelAccessInput">uniformBucketLevelAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.versioningInput">versioningInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.websiteInput">websiteInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.defaultEventBasedHold">defaultEventBasedHold</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.enableObjectRetention">enableObjectRetention</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.publicAccessPrevention">publicAccessPrevention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.rpo">rpo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.uniformBucketLevelAccess">uniformBucketLevelAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoclass`<sup>Required</sup> <a name="autoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.autoclass"></a>

```java
public GoogleStorageBucketAutoclassOutputReference getAutoclass();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference">GoogleStorageBucketAutoclassOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.cors"></a>

```java
public GoogleStorageBucketCorsList getCors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList">GoogleStorageBucketCorsList</a>

---

##### `customPlacementConfig`<sup>Required</sup> <a name="customPlacementConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.customPlacementConfig"></a>

```java
public GoogleStorageBucketCustomPlacementConfigOutputReference getCustomPlacementConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference">GoogleStorageBucketCustomPlacementConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.encryption"></a>

```java
public GoogleStorageBucketEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference">GoogleStorageBucketEncryptionOutputReference</a>

---

##### `hierarchicalNamespace`<sup>Required</sup> <a name="hierarchicalNamespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.hierarchicalNamespace"></a>

```java
public GoogleStorageBucketHierarchicalNamespaceOutputReference getHierarchicalNamespace();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference">GoogleStorageBucketHierarchicalNamespaceOutputReference</a>

---

##### `lifecycleRule`<sup>Required</sup> <a name="lifecycleRule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycleRule"></a>

```java
public GoogleStorageBucketLifecycleRuleList getLifecycleRule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList">GoogleStorageBucketLifecycleRuleList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.logging"></a>

```java
public GoogleStorageBucketLoggingOutputReference getLogging();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference">GoogleStorageBucketLoggingOutputReference</a>

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.projectNumber"></a>

```java
public java.lang.Number getProjectNumber();
```

- *Type:* java.lang.Number

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.retentionPolicy"></a>

```java
public GoogleStorageBucketRetentionPolicyOutputReference getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference">GoogleStorageBucketRetentionPolicyOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `softDeletePolicy`<sup>Required</sup> <a name="softDeletePolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.softDeletePolicy"></a>

```java
public GoogleStorageBucketSoftDeletePolicyOutputReference getSoftDeletePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference">GoogleStorageBucketSoftDeletePolicyOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.timeouts"></a>

```java
public GoogleStorageBucketTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference">GoogleStorageBucketTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.versioning"></a>

```java
public GoogleStorageBucketVersioningOutputReference getVersioning();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference">GoogleStorageBucketVersioningOutputReference</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.website"></a>

```java
public GoogleStorageBucketWebsiteOutputReference getWebsite();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference">GoogleStorageBucketWebsiteOutputReference</a>

---

##### `autoclassInput`<sup>Optional</sup> <a name="autoclassInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.autoclassInput"></a>

```java
public GoogleStorageBucketAutoclass getAutoclassInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.corsInput"></a>

```java
public java.lang.Object getCorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>>

---

##### `customPlacementConfigInput`<sup>Optional</sup> <a name="customPlacementConfigInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.customPlacementConfigInput"></a>

```java
public GoogleStorageBucketCustomPlacementConfig getCustomPlacementConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

---

##### `defaultEventBasedHoldInput`<sup>Optional</sup> <a name="defaultEventBasedHoldInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.defaultEventBasedHoldInput"></a>

```java
public java.lang.Object getDefaultEventBasedHoldInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableObjectRetentionInput`<sup>Optional</sup> <a name="enableObjectRetentionInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.enableObjectRetentionInput"></a>

```java
public java.lang.Object getEnableObjectRetentionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.encryptionInput"></a>

```java
public GoogleStorageBucketEncryption getEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hierarchicalNamespaceInput`<sup>Optional</sup> <a name="hierarchicalNamespaceInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.hierarchicalNamespaceInput"></a>

```java
public GoogleStorageBucketHierarchicalNamespace getHierarchicalNamespaceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lifecycleRuleInput`<sup>Optional</sup> <a name="lifecycleRuleInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycleRuleInput"></a>

```java
public java.lang.Object getLifecycleRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.loggingInput"></a>

```java
public GoogleStorageBucketLogging getLoggingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `publicAccessPreventionInput`<sup>Optional</sup> <a name="publicAccessPreventionInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.publicAccessPreventionInput"></a>

```java
public java.lang.String getPublicAccessPreventionInput();
```

- *Type:* java.lang.String

---

##### `requesterPaysInput`<sup>Optional</sup> <a name="requesterPaysInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.requesterPaysInput"></a>

```java
public java.lang.Object getRequesterPaysInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.retentionPolicyInput"></a>

```java
public GoogleStorageBucketRetentionPolicy getRetentionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

---

##### `rpoInput`<sup>Optional</sup> <a name="rpoInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.rpoInput"></a>

```java
public java.lang.String getRpoInput();
```

- *Type:* java.lang.String

---

##### `softDeletePolicyInput`<sup>Optional</sup> <a name="softDeletePolicyInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.softDeletePolicyInput"></a>

```java
public GoogleStorageBucketSoftDeletePolicy getSoftDeletePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>

---

##### `uniformBucketLevelAccessInput`<sup>Optional</sup> <a name="uniformBucketLevelAccessInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.uniformBucketLevelAccessInput"></a>

```java
public java.lang.Object getUniformBucketLevelAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versioningInput`<sup>Optional</sup> <a name="versioningInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.versioningInput"></a>

```java
public GoogleStorageBucketVersioning getVersioningInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

---

##### `websiteInput`<sup>Optional</sup> <a name="websiteInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.websiteInput"></a>

```java
public GoogleStorageBucketWebsite getWebsiteInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

---

##### `defaultEventBasedHold`<sup>Required</sup> <a name="defaultEventBasedHold" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.defaultEventBasedHold"></a>

```java
public java.lang.Object getDefaultEventBasedHold();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableObjectRetention`<sup>Required</sup> <a name="enableObjectRetention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.enableObjectRetention"></a>

```java
public java.lang.Object getEnableObjectRetention();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `publicAccessPrevention`<sup>Required</sup> <a name="publicAccessPrevention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.publicAccessPrevention"></a>

```java
public java.lang.String getPublicAccessPrevention();
```

- *Type:* java.lang.String

---

##### `requesterPays`<sup>Required</sup> <a name="requesterPays" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.requesterPays"></a>

```java
public java.lang.Object getRequesterPays();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rpo`<sup>Required</sup> <a name="rpo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.rpo"></a>

```java
public java.lang.String getRpo();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `uniformBucketLevelAccess`<sup>Required</sup> <a name="uniformBucketLevelAccess" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.uniformBucketLevelAccess"></a>

```java
public java.lang.Object getUniformBucketLevelAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageBucketAutoclass <a name="GoogleStorageBucketAutoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketAutoclass;

GoogleStorageBucketAutoclass.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .terminalStorageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.property.terminalStorageClass">terminalStorageClass</a></code> | <code>java.lang.String</code> | The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}

---

##### `terminalStorageClass`<sup>Optional</sup> <a name="terminalStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.property.terminalStorageClass"></a>

```java
public java.lang.String getTerminalStorageClass();
```

- *Type:* java.lang.String

The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time.

Supported values include: NEARLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#terminal_storage_class GoogleStorageBucket#terminal_storage_class}

---

### GoogleStorageBucketConfig <a name="GoogleStorageBucketConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketConfig;

GoogleStorageBucketConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
//  .autoclass(GoogleStorageBucketAutoclass)
//  .cors(IResolvable)
//  .cors(java.util.List<GoogleStorageBucketCors>)
//  .customPlacementConfig(GoogleStorageBucketCustomPlacementConfig)
//  .defaultEventBasedHold(java.lang.Boolean)
//  .defaultEventBasedHold(IResolvable)
//  .enableObjectRetention(java.lang.Boolean)
//  .enableObjectRetention(IResolvable)
//  .encryption(GoogleStorageBucketEncryption)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .hierarchicalNamespace(GoogleStorageBucketHierarchicalNamespace)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .lifecycleRule(IResolvable)
//  .lifecycleRule(java.util.List<GoogleStorageBucketLifecycleRule>)
//  .logging(GoogleStorageBucketLogging)
//  .project(java.lang.String)
//  .publicAccessPrevention(java.lang.String)
//  .requesterPays(java.lang.Boolean)
//  .requesterPays(IResolvable)
//  .retentionPolicy(GoogleStorageBucketRetentionPolicy)
//  .rpo(java.lang.String)
//  .softDeletePolicy(GoogleStorageBucketSoftDeletePolicy)
//  .storageClass(java.lang.String)
//  .timeouts(GoogleStorageBucketTimeouts)
//  .uniformBucketLevelAccess(java.lang.Boolean)
//  .uniformBucketLevelAccess(IResolvable)
//  .versioning(GoogleStorageBucketVersioning)
//  .website(GoogleStorageBucketWebsite)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.location">location</a></code> | <code>java.lang.String</code> | The Google Cloud Storage location. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.cors">cors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>></code> | cors block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.customPlacementConfig">customPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a></code> | custom_placement_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.defaultEventBasedHold">defaultEventBasedHold</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.enableObjectRetention">enableObjectRetention</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When deleting a bucket, this boolean option will delete all contained objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.hierarchicalNamespace">hierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a></code> | hierarchical_namespace block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#id GoogleStorageBucket#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.lifecycleRule">lifecycleRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>></code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.publicAccessPrevention">publicAccessPrevention</a></code> | <code>java.lang.String</code> | Prevents public access to a bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.requesterPays">requesterPays</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables Requester Pays on a storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.rpo">rpo</a></code> | <code>java.lang.String</code> | Specifies the RPO setting of bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.softDeletePolicy">softDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a></code> | soft_delete_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.uniformBucketLevelAccess">uniformBucketLevelAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables uniform bucket-level access on a bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.website">website</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a></code> | website block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The Google Cloud Storage location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#location GoogleStorageBucket#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#name GoogleStorageBucket#name}

---

##### `autoclass`<sup>Optional</sup> <a name="autoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.autoclass"></a>

```java
public GoogleStorageBucketAutoclass getAutoclass();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#autoclass GoogleStorageBucket#autoclass}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.cors"></a>

```java
public java.lang.Object getCors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#cors GoogleStorageBucket#cors}

---

##### `customPlacementConfig`<sup>Optional</sup> <a name="customPlacementConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.customPlacementConfig"></a>

```java
public GoogleStorageBucketCustomPlacementConfig getCustomPlacementConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

custom_placement_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#custom_placement_config GoogleStorageBucket#custom_placement_config}

---

##### `defaultEventBasedHold`<sup>Optional</sup> <a name="defaultEventBasedHold" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.defaultEventBasedHold"></a>

```java
public java.lang.Object getDefaultEventBasedHold();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#default_event_based_hold GoogleStorageBucket#default_event_based_hold}

---

##### `enableObjectRetention`<sup>Optional</sup> <a name="enableObjectRetention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.enableObjectRetention"></a>

```java
public java.lang.Object getEnableObjectRetention();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#enable_object_retention GoogleStorageBucket#enable_object_retention}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.encryption"></a>

```java
public GoogleStorageBucketEncryption getEncryption();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#encryption GoogleStorageBucket#encryption}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When deleting a bucket, this boolean option will delete all contained objects.

If you try to delete a bucket that contains objects, Terraform will fail that run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#force_destroy GoogleStorageBucket#force_destroy}

---

##### `hierarchicalNamespace`<sup>Optional</sup> <a name="hierarchicalNamespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.hierarchicalNamespace"></a>

```java
public GoogleStorageBucketHierarchicalNamespace getHierarchicalNamespace();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

hierarchical_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#hierarchical_namespace GoogleStorageBucket#hierarchical_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#id GoogleStorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#labels GoogleStorageBucket#labels}

---

##### `lifecycleRule`<sup>Optional</sup> <a name="lifecycleRule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.lifecycleRule"></a>

```java
public java.lang.Object getLifecycleRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>>

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#lifecycle_rule GoogleStorageBucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.logging"></a>

```java
public GoogleStorageBucketLogging getLogging();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#logging GoogleStorageBucket#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#project GoogleStorageBucket#project}

---

##### `publicAccessPrevention`<sup>Optional</sup> <a name="publicAccessPrevention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.publicAccessPrevention"></a>

```java
public java.lang.String getPublicAccessPrevention();
```

- *Type:* java.lang.String

Prevents public access to a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#public_access_prevention GoogleStorageBucket#public_access_prevention}

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.requesterPays"></a>

```java
public java.lang.Object getRequesterPays();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables Requester Pays on a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#requester_pays GoogleStorageBucket#requester_pays}

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.retentionPolicy"></a>

```java
public GoogleStorageBucketRetentionPolicy getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#retention_policy GoogleStorageBucket#retention_policy}

---

##### `rpo`<sup>Optional</sup> <a name="rpo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.rpo"></a>

```java
public java.lang.String getRpo();
```

- *Type:* java.lang.String

Specifies the RPO setting of bucket.

If set 'ASYNC_TURBO', The Turbo Replication will be enabled for the dual-region bucket. Value 'DEFAULT' will set RPO setting to default. Turbo Replication is only for buckets in dual-regions.See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#rpo GoogleStorageBucket#rpo}

---

##### `softDeletePolicy`<sup>Optional</sup> <a name="softDeletePolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.softDeletePolicy"></a>

```java
public GoogleStorageBucketSoftDeletePolicy getSoftDeletePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

soft_delete_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#soft_delete_policy GoogleStorageBucket#soft_delete_policy}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#storage_class GoogleStorageBucket#storage_class}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.timeouts"></a>

```java
public GoogleStorageBucketTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#timeouts GoogleStorageBucket#timeouts}

---

##### `uniformBucketLevelAccess`<sup>Optional</sup> <a name="uniformBucketLevelAccess" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.uniformBucketLevelAccess"></a>

```java
public java.lang.Object getUniformBucketLevelAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables uniform bucket-level access on a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#uniform_bucket_level_access GoogleStorageBucket#uniform_bucket_level_access}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.versioning"></a>

```java
public GoogleStorageBucketVersioning getVersioning();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#versioning GoogleStorageBucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.website"></a>

```java
public GoogleStorageBucketWebsite getWebsite();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#website GoogleStorageBucket#website}

---

### GoogleStorageBucketCors <a name="GoogleStorageBucketCors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketCors;

GoogleStorageBucketCors.builder()
//  .maxAgeSeconds(java.lang.Number)
//  .method(java.util.List<java.lang.String>)
//  .origin(java.util.List<java.lang.String>)
//  .responseHeader(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>java.lang.Number</code> | The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.origin">origin</a></code> | <code>java.util.List<java.lang.String></code> | The list of Origins eligible to receive CORS response headers. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.responseHeader">responseHeader</a></code> | <code>java.util.List<java.lang.String></code> | The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. |

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="maxAgeSeconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.maxAgeSeconds"></a>

```java
public java.lang.Number getMaxAgeSeconds();
```

- *Type:* java.lang.Number

The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#max_age_seconds GoogleStorageBucket#max_age_seconds}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#method GoogleStorageBucket#method}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.origin"></a>

```java
public java.util.List<java.lang.String> getOrigin();
```

- *Type:* java.util.List<java.lang.String>

The list of Origins eligible to receive CORS response headers.

Note: "*" is permitted in the list of origins, and means "any Origin".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#origin GoogleStorageBucket#origin}

---

##### `responseHeader`<sup>Optional</sup> <a name="responseHeader" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.responseHeader"></a>

```java
public java.util.List<java.lang.String> getResponseHeader();
```

- *Type:* java.util.List<java.lang.String>

The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#response_header GoogleStorageBucket#response_header}

---

### GoogleStorageBucketCustomPlacementConfig <a name="GoogleStorageBucketCustomPlacementConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketCustomPlacementConfig;

GoogleStorageBucketCustomPlacementConfig.builder()
    .dataLocations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig.property.dataLocations">dataLocations</a></code> | <code>java.util.List<java.lang.String></code> | The list of individual regions that comprise a dual-region bucket. |

---

##### `dataLocations`<sup>Required</sup> <a name="dataLocations" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig.property.dataLocations"></a>

```java
public java.util.List<java.lang.String> getDataLocations();
```

- *Type:* java.util.List<java.lang.String>

The list of individual regions that comprise a dual-region bucket.

See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#data_locations GoogleStorageBucket#data_locations}

---

### GoogleStorageBucketEncryption <a name="GoogleStorageBucketEncryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketEncryption;

GoogleStorageBucketEncryption.builder()
    .defaultKmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption.property.defaultKmsKeyName">defaultKmsKeyName</a></code> | <code>java.lang.String</code> | A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. |

---

##### `defaultKmsKeyName`<sup>Required</sup> <a name="defaultKmsKeyName" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption.property.defaultKmsKeyName"></a>

```java
public java.lang.String getDefaultKmsKeyName();
```

- *Type:* java.lang.String

A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.

You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#default_kms_key_name GoogleStorageBucket#default_kms_key_name}

---

### GoogleStorageBucketHierarchicalNamespace <a name="GoogleStorageBucketHierarchicalNamespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketHierarchicalNamespace;

GoogleStorageBucketHierarchicalNamespace.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set this field true to organize bucket with logical file system structure. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set this field true to organize bucket with logical file system structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}

---

### GoogleStorageBucketLifecycleRule <a name="GoogleStorageBucketLifecycleRule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketLifecycleRule;

GoogleStorageBucketLifecycleRule.builder()
    .action(GoogleStorageBucketLifecycleRuleAction)
    .condition(GoogleStorageBucketLifecycleRuleCondition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a></code> | condition block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.property.action"></a>

```java
public GoogleStorageBucketLifecycleRuleAction getAction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#action GoogleStorageBucket#action}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.property.condition"></a>

```java
public GoogleStorageBucketLifecycleRuleCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#condition GoogleStorageBucket#condition}

---

### GoogleStorageBucketLifecycleRuleAction <a name="GoogleStorageBucketLifecycleRuleAction" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketLifecycleRuleAction;

GoogleStorageBucketLifecycleRuleAction.builder()
    .type(java.lang.String)
//  .storageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.property.type">type</a></code> | <code>java.lang.String</code> | The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#type GoogleStorageBucket#type}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#storage_class GoogleStorageBucket#storage_class}

---

### GoogleStorageBucketLifecycleRuleCondition <a name="GoogleStorageBucketLifecycleRuleCondition" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketLifecycleRuleCondition;

GoogleStorageBucketLifecycleRuleCondition.builder()
//  .age(java.lang.Number)
//  .createdBefore(java.lang.String)
//  .customTimeBefore(java.lang.String)
//  .daysSinceCustomTime(java.lang.Number)
//  .daysSinceNoncurrentTime(java.lang.Number)
//  .matchesPrefix(java.util.List<java.lang.String>)
//  .matchesStorageClass(java.util.List<java.lang.String>)
//  .matchesSuffix(java.util.List<java.lang.String>)
//  .noncurrentTimeBefore(java.lang.String)
//  .numNewerVersions(java.lang.Number)
//  .sendAgeIfZero(java.lang.Boolean)
//  .sendAgeIfZero(IResolvable)
//  .sendDaysSinceCustomTimeIfZero(java.lang.Boolean)
//  .sendDaysSinceCustomTimeIfZero(IResolvable)
//  .sendDaysSinceNoncurrentTimeIfZero(java.lang.Boolean)
//  .sendDaysSinceNoncurrentTimeIfZero(IResolvable)
//  .sendNumNewerVersionsIfZero(java.lang.Boolean)
//  .sendNumNewerVersionsIfZero(IResolvable)
//  .withState(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.age">age</a></code> | <code>java.lang.Number</code> | Minimum age of an object in days to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.customTimeBefore">customTimeBefore</a></code> | <code>java.lang.String</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.daysSinceCustomTime">daysSinceCustomTime</a></code> | <code>java.lang.Number</code> | Number of days elapsed since the user-specified timestamp set on an object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime">daysSinceNoncurrentTime</a></code> | <code>java.lang.Number</code> | Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesPrefix">matchesPrefix</a></code> | <code>java.util.List<java.lang.String></code> | One or more matching name prefixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesStorageClass">matchesStorageClass</a></code> | <code>java.util.List<java.lang.String></code> | Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesSuffix">matchesSuffix</a></code> | <code>java.util.List<java.lang.String></code> | One or more matching name suffixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore">noncurrentTimeBefore</a></code> | <code>java.lang.String</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.numNewerVersions">numNewerVersions</a></code> | <code>java.lang.Number</code> | Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendAgeIfZero">sendAgeIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | While set true, age value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendDaysSinceCustomTimeIfZero">sendDaysSinceCustomTimeIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | While set true, days_since_custom_time value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendDaysSinceNoncurrentTimeIfZero">sendDaysSinceNoncurrentTimeIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendNumNewerVersionsIfZero">sendNumNewerVersionsIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | While set true, num_newer_versions value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.withState">withState</a></code> | <code>java.lang.String</code> | Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY". |

---

##### `age`<sup>Optional</sup> <a name="age" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.age"></a>

```java
public java.lang.Number getAge();
```

- *Type:* java.lang.Number

Minimum age of an object in days to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#age GoogleStorageBucket#age}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#created_before GoogleStorageBucket#created_before}

---

##### `customTimeBefore`<sup>Optional</sup> <a name="customTimeBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.customTimeBefore"></a>

```java
public java.lang.String getCustomTimeBefore();
```

- *Type:* java.lang.String

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#custom_time_before GoogleStorageBucket#custom_time_before}

---

##### `daysSinceCustomTime`<sup>Optional</sup> <a name="daysSinceCustomTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.daysSinceCustomTime"></a>

```java
public java.lang.Number getDaysSinceCustomTime();
```

- *Type:* java.lang.Number

Number of days elapsed since the user-specified timestamp set on an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#days_since_custom_time GoogleStorageBucket#days_since_custom_time}

---

##### `daysSinceNoncurrentTime`<sup>Optional</sup> <a name="daysSinceNoncurrentTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime"></a>

```java
public java.lang.Number getDaysSinceNoncurrentTime();
```

- *Type:* java.lang.Number

Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#days_since_noncurrent_time GoogleStorageBucket#days_since_noncurrent_time}

---

##### `matchesPrefix`<sup>Optional</sup> <a name="matchesPrefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesPrefix"></a>

```java
public java.util.List<java.lang.String> getMatchesPrefix();
```

- *Type:* java.util.List<java.lang.String>

One or more matching name prefixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#matches_prefix GoogleStorageBucket#matches_prefix}

---

##### `matchesStorageClass`<sup>Optional</sup> <a name="matchesStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesStorageClass"></a>

```java
public java.util.List<java.lang.String> getMatchesStorageClass();
```

- *Type:* java.util.List<java.lang.String>

Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#matches_storage_class GoogleStorageBucket#matches_storage_class}

---

##### `matchesSuffix`<sup>Optional</sup> <a name="matchesSuffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesSuffix"></a>

```java
public java.util.List<java.lang.String> getMatchesSuffix();
```

- *Type:* java.util.List<java.lang.String>

One or more matching name suffixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#matches_suffix GoogleStorageBucket#matches_suffix}

---

##### `noncurrentTimeBefore`<sup>Optional</sup> <a name="noncurrentTimeBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore"></a>

```java
public java.lang.String getNoncurrentTimeBefore();
```

- *Type:* java.lang.String

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#noncurrent_time_before GoogleStorageBucket#noncurrent_time_before}

---

##### `numNewerVersions`<sup>Optional</sup> <a name="numNewerVersions" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.numNewerVersions"></a>

```java
public java.lang.Number getNumNewerVersions();
```

- *Type:* java.lang.Number

Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#num_newer_versions GoogleStorageBucket#num_newer_versions}

---

##### `sendAgeIfZero`<sup>Optional</sup> <a name="sendAgeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendAgeIfZero"></a>

```java
public java.lang.Object getSendAgeIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

While set true, age value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the age field. It can be used alone or together with age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#send_age_if_zero GoogleStorageBucket#send_age_if_zero}

---

##### `sendDaysSinceCustomTimeIfZero`<sup>Optional</sup> <a name="sendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendDaysSinceCustomTimeIfZero"></a>

```java
public java.lang.Object getSendDaysSinceCustomTimeIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

While set true, days_since_custom_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_custom_time field. It can be used alone or together with days_since_custom_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#send_days_since_custom_time_if_zero GoogleStorageBucket#send_days_since_custom_time_if_zero}

---

##### `sendDaysSinceNoncurrentTimeIfZero`<sup>Optional</sup> <a name="sendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```java
public java.lang.Object getSendDaysSinceNoncurrentTimeIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_noncurrent_time field. It can be used alone or together with days_since_noncurrent_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#send_days_since_noncurrent_time_if_zero GoogleStorageBucket#send_days_since_noncurrent_time_if_zero}

---

##### `sendNumNewerVersionsIfZero`<sup>Optional</sup> <a name="sendNumNewerVersionsIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendNumNewerVersionsIfZero"></a>

```java
public java.lang.Object getSendNumNewerVersionsIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

While set true, num_newer_versions value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the num_newer_versions field. It can be used alone or together with num_newer_versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#send_num_newer_versions_if_zero GoogleStorageBucket#send_num_newer_versions_if_zero}

---

##### `withState`<sup>Optional</sup> <a name="withState" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.withState"></a>

```java
public java.lang.String getWithState();
```

- *Type:* java.lang.String

Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#with_state GoogleStorageBucket#with_state}

---

### GoogleStorageBucketLogging <a name="GoogleStorageBucketLogging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketLogging;

GoogleStorageBucketLogging.builder()
    .logBucket(java.lang.String)
//  .logObjectPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.property.logBucket">logBucket</a></code> | <code>java.lang.String</code> | The bucket that will receive log objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.property.logObjectPrefix">logObjectPrefix</a></code> | <code>java.lang.String</code> | The object prefix for log objects. |

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.property.logBucket"></a>

```java
public java.lang.String getLogBucket();
```

- *Type:* java.lang.String

The bucket that will receive log objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#log_bucket GoogleStorageBucket#log_bucket}

---

##### `logObjectPrefix`<sup>Optional</sup> <a name="logObjectPrefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.property.logObjectPrefix"></a>

```java
public java.lang.String getLogObjectPrefix();
```

- *Type:* java.lang.String

The object prefix for log objects.

If it's not provided, by default Google Cloud Storage sets this to this bucket's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#log_object_prefix GoogleStorageBucket#log_object_prefix}

---

### GoogleStorageBucketRetentionPolicy <a name="GoogleStorageBucketRetentionPolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketRetentionPolicy;

GoogleStorageBucketRetentionPolicy.builder()
    .retentionPeriod(java.lang.Number)
//  .isLocked(java.lang.Boolean)
//  .isLocked(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.property.isLocked">isLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy. |

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived.

The value must be less than 3,155,760,000 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#retention_period GoogleStorageBucket#retention_period}

---

##### `isLocked`<sup>Optional</sup> <a name="isLocked" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.property.isLocked"></a>

```java
public java.lang.Object getIsLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.

Caution: Locking a bucket is an irreversible action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#is_locked GoogleStorageBucket#is_locked}

---

### GoogleStorageBucketSoftDeletePolicy <a name="GoogleStorageBucketSoftDeletePolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketSoftDeletePolicy;

GoogleStorageBucketSoftDeletePolicy.builder()
//  .retentionDurationSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy.property.retentionDurationSeconds">retentionDurationSeconds</a></code> | <code>java.lang.Number</code> | The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. |

---

##### `retentionDurationSeconds`<sup>Optional</sup> <a name="retentionDurationSeconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy.property.retentionDurationSeconds"></a>

```java
public java.lang.Number getRetentionDurationSeconds();
```

- *Type:* java.lang.Number

The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted.

Default value is 604800.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#retention_duration_seconds GoogleStorageBucket#retention_duration_seconds}

---

### GoogleStorageBucketTimeouts <a name="GoogleStorageBucketTimeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketTimeouts;

GoogleStorageBucketTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#create GoogleStorageBucket#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#read GoogleStorageBucket#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#update GoogleStorageBucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#create GoogleStorageBucket#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#read GoogleStorageBucket#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#update GoogleStorageBucket#update}.

---

### GoogleStorageBucketVersioning <a name="GoogleStorageBucketVersioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketVersioning;

GoogleStorageBucketVersioning.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | While set to true, versioning is fully enabled for this bucket. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

While set to true, versioning is fully enabled for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}

---

### GoogleStorageBucketWebsite <a name="GoogleStorageBucketWebsite" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketWebsite;

GoogleStorageBucketWebsite.builder()
//  .mainPageSuffix(java.lang.String)
//  .notFoundPage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.property.mainPageSuffix">mainPageSuffix</a></code> | <code>java.lang.String</code> | Behaves as the bucket's directory index where missing objects are treated as potential directories. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.property.notFoundPage">notFoundPage</a></code> | <code>java.lang.String</code> | The custom object to return when a requested resource is not found. |

---

##### `mainPageSuffix`<sup>Optional</sup> <a name="mainPageSuffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.property.mainPageSuffix"></a>

```java
public java.lang.String getMainPageSuffix();
```

- *Type:* java.lang.String

Behaves as the bucket's directory index where missing objects are treated as potential directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#main_page_suffix GoogleStorageBucket#main_page_suffix}

---

##### `notFoundPage`<sup>Optional</sup> <a name="notFoundPage" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.property.notFoundPage"></a>

```java
public java.lang.String getNotFoundPage();
```

- *Type:* java.lang.String

The custom object to return when a requested resource is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_storage_bucket#not_found_page GoogleStorageBucket#not_found_page}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageBucketAutoclassOutputReference <a name="GoogleStorageBucketAutoclassOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketAutoclassOutputReference;

new GoogleStorageBucketAutoclassOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resetTerminalStorageClass">resetTerminalStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTerminalStorageClass` <a name="resetTerminalStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resetTerminalStorageClass"></a>

```java
public void resetTerminalStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.terminalStorageClassInput">terminalStorageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.terminalStorageClass">terminalStorageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminalStorageClassInput`<sup>Optional</sup> <a name="terminalStorageClassInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.terminalStorageClassInput"></a>

```java
public java.lang.String getTerminalStorageClassInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminalStorageClass`<sup>Required</sup> <a name="terminalStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.terminalStorageClass"></a>

```java
public java.lang.String getTerminalStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.internalValue"></a>

```java
public GoogleStorageBucketAutoclass getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

---


### GoogleStorageBucketCorsList <a name="GoogleStorageBucketCorsList" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketCorsList;

new GoogleStorageBucketCorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.get"></a>

```java
public GoogleStorageBucketCorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>>

---


### GoogleStorageBucketCorsOutputReference <a name="GoogleStorageBucketCorsOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketCorsOutputReference;

new GoogleStorageBucketCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetMaxAgeSeconds">resetMaxAgeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetResponseHeader">resetResponseHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAgeSeconds` <a name="resetMaxAgeSeconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetMaxAgeSeconds"></a>

```java
public void resetMaxAgeSeconds()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetOrigin"></a>

```java
public void resetOrigin()
```

##### `resetResponseHeader` <a name="resetResponseHeader" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetResponseHeader"></a>

```java
public void resetResponseHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.maxAgeSecondsInput">maxAgeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.originInput">originInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.responseHeaderInput">responseHeaderInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.origin">origin</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.responseHeader">responseHeader</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxAgeSecondsInput`<sup>Optional</sup> <a name="maxAgeSecondsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.maxAgeSecondsInput"></a>

```java
public java.lang.Number getMaxAgeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.methodInput"></a>

```java
public java.util.List<java.lang.String> getMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.originInput"></a>

```java
public java.util.List<java.lang.String> getOriginInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseHeaderInput`<sup>Optional</sup> <a name="responseHeaderInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.responseHeaderInput"></a>

```java
public java.util.List<java.lang.String> getResponseHeaderInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.maxAgeSeconds"></a>

```java
public java.lang.Number getMaxAgeSeconds();
```

- *Type:* java.lang.Number

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.origin"></a>

```java
public java.util.List<java.lang.String> getOrigin();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseHeader`<sup>Required</sup> <a name="responseHeader" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.responseHeader"></a>

```java
public java.util.List<java.lang.String> getResponseHeader();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors">GoogleStorageBucketCors</a>

---


### GoogleStorageBucketCustomPlacementConfigOutputReference <a name="GoogleStorageBucketCustomPlacementConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketCustomPlacementConfigOutputReference;

new GoogleStorageBucketCustomPlacementConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput">dataLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocations">dataLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataLocationsInput`<sup>Optional</sup> <a name="dataLocationsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput"></a>

```java
public java.util.List<java.lang.String> getDataLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataLocations`<sup>Required</sup> <a name="dataLocations" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocations"></a>

```java
public java.util.List<java.lang.String> getDataLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.internalValue"></a>

```java
public GoogleStorageBucketCustomPlacementConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

---


### GoogleStorageBucketEncryptionOutputReference <a name="GoogleStorageBucketEncryptionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketEncryptionOutputReference;

new GoogleStorageBucketEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput">defaultKmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyName">defaultKmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultKmsKeyNameInput`<sup>Optional</sup> <a name="defaultKmsKeyNameInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput"></a>

```java
public java.lang.String getDefaultKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `defaultKmsKeyName`<sup>Required</sup> <a name="defaultKmsKeyName" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyName"></a>

```java
public java.lang.String getDefaultKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.internalValue"></a>

```java
public GoogleStorageBucketEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

---


### GoogleStorageBucketHierarchicalNamespaceOutputReference <a name="GoogleStorageBucketHierarchicalNamespaceOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketHierarchicalNamespaceOutputReference;

new GoogleStorageBucketHierarchicalNamespaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.internalValue"></a>

```java
public GoogleStorageBucketHierarchicalNamespace getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

---


### GoogleStorageBucketLifecycleRuleActionOutputReference <a name="GoogleStorageBucketLifecycleRuleActionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketLifecycleRuleActionOutputReference;

new GoogleStorageBucketLifecycleRuleActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resetStorageClass"></a>

```java
public void resetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.internalValue"></a>

```java
public GoogleStorageBucketLifecycleRuleAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a>

---


### GoogleStorageBucketLifecycleRuleConditionOutputReference <a name="GoogleStorageBucketLifecycleRuleConditionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketLifecycleRuleConditionOutputReference;

new GoogleStorageBucketLifecycleRuleConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetAge">resetAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore">resetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore">resetCustomTimeBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime">resetDaysSinceCustomTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime">resetDaysSinceNoncurrentTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix">resetMatchesPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass">resetMatchesStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix">resetMatchesSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore">resetNoncurrentTimeBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions">resetNumNewerVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendAgeIfZero">resetSendAgeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceCustomTimeIfZero">resetSendDaysSinceCustomTimeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceNoncurrentTimeIfZero">resetSendDaysSinceNoncurrentTimeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendNumNewerVersionsIfZero">resetSendNumNewerVersionsIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetWithState">resetWithState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAge` <a name="resetAge" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetAge"></a>

```java
public void resetAge()
```

##### `resetCreatedBefore` <a name="resetCreatedBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore"></a>

```java
public void resetCreatedBefore()
```

##### `resetCustomTimeBefore` <a name="resetCustomTimeBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore"></a>

```java
public void resetCustomTimeBefore()
```

##### `resetDaysSinceCustomTime` <a name="resetDaysSinceCustomTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime"></a>

```java
public void resetDaysSinceCustomTime()
```

##### `resetDaysSinceNoncurrentTime` <a name="resetDaysSinceNoncurrentTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime"></a>

```java
public void resetDaysSinceNoncurrentTime()
```

##### `resetMatchesPrefix` <a name="resetMatchesPrefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix"></a>

```java
public void resetMatchesPrefix()
```

##### `resetMatchesStorageClass` <a name="resetMatchesStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass"></a>

```java
public void resetMatchesStorageClass()
```

##### `resetMatchesSuffix` <a name="resetMatchesSuffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix"></a>

```java
public void resetMatchesSuffix()
```

##### `resetNoncurrentTimeBefore` <a name="resetNoncurrentTimeBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore"></a>

```java
public void resetNoncurrentTimeBefore()
```

##### `resetNumNewerVersions` <a name="resetNumNewerVersions" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions"></a>

```java
public void resetNumNewerVersions()
```

##### `resetSendAgeIfZero` <a name="resetSendAgeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendAgeIfZero"></a>

```java
public void resetSendAgeIfZero()
```

##### `resetSendDaysSinceCustomTimeIfZero` <a name="resetSendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceCustomTimeIfZero"></a>

```java
public void resetSendDaysSinceCustomTimeIfZero()
```

##### `resetSendDaysSinceNoncurrentTimeIfZero` <a name="resetSendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceNoncurrentTimeIfZero"></a>

```java
public void resetSendDaysSinceNoncurrentTimeIfZero()
```

##### `resetSendNumNewerVersionsIfZero` <a name="resetSendNumNewerVersionsIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendNumNewerVersionsIfZero"></a>

```java
public void resetSendNumNewerVersionsIfZero()
```

##### `resetWithState` <a name="resetWithState" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetWithState"></a>

```java
public void resetWithState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.ageInput">ageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput">createdBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput">customTimeBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput">daysSinceCustomTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput">daysSinceNoncurrentTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput">matchesPrefixInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput">matchesStorageClassInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput">matchesSuffixInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput">noncurrentTimeBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput">numNewerVersionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZeroInput">sendAgeIfZeroInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZeroInput">sendDaysSinceCustomTimeIfZeroInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZeroInput">sendDaysSinceNoncurrentTimeIfZeroInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZeroInput">sendNumNewerVersionsIfZeroInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.withStateInput">withStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.age">age</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore">customTimeBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime">daysSinceCustomTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime">daysSinceNoncurrentTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix">matchesPrefix</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass">matchesStorageClass</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix">matchesSuffix</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore">noncurrentTimeBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions">numNewerVersions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero">sendAgeIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero">sendDaysSinceCustomTimeIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero">sendDaysSinceNoncurrentTimeIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero">sendNumNewerVersionsIfZero</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.withState">withState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ageInput`<sup>Optional</sup> <a name="ageInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.ageInput"></a>

```java
public java.lang.Number getAgeInput();
```

- *Type:* java.lang.Number

---

##### `createdBeforeInput`<sup>Optional</sup> <a name="createdBeforeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput"></a>

```java
public java.lang.String getCreatedBeforeInput();
```

- *Type:* java.lang.String

---

##### `customTimeBeforeInput`<sup>Optional</sup> <a name="customTimeBeforeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput"></a>

```java
public java.lang.String getCustomTimeBeforeInput();
```

- *Type:* java.lang.String

---

##### `daysSinceCustomTimeInput`<sup>Optional</sup> <a name="daysSinceCustomTimeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput"></a>

```java
public java.lang.Number getDaysSinceCustomTimeInput();
```

- *Type:* java.lang.Number

---

##### `daysSinceNoncurrentTimeInput`<sup>Optional</sup> <a name="daysSinceNoncurrentTimeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput"></a>

```java
public java.lang.Number getDaysSinceNoncurrentTimeInput();
```

- *Type:* java.lang.Number

---

##### `matchesPrefixInput`<sup>Optional</sup> <a name="matchesPrefixInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput"></a>

```java
public java.util.List<java.lang.String> getMatchesPrefixInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchesStorageClassInput`<sup>Optional</sup> <a name="matchesStorageClassInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput"></a>

```java
public java.util.List<java.lang.String> getMatchesStorageClassInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchesSuffixInput`<sup>Optional</sup> <a name="matchesSuffixInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput"></a>

```java
public java.util.List<java.lang.String> getMatchesSuffixInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `noncurrentTimeBeforeInput`<sup>Optional</sup> <a name="noncurrentTimeBeforeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput"></a>

```java
public java.lang.String getNoncurrentTimeBeforeInput();
```

- *Type:* java.lang.String

---

##### `numNewerVersionsInput`<sup>Optional</sup> <a name="numNewerVersionsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput"></a>

```java
public java.lang.Number getNumNewerVersionsInput();
```

- *Type:* java.lang.Number

---

##### `sendAgeIfZeroInput`<sup>Optional</sup> <a name="sendAgeIfZeroInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZeroInput"></a>

```java
public java.lang.Object getSendAgeIfZeroInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendDaysSinceCustomTimeIfZeroInput`<sup>Optional</sup> <a name="sendDaysSinceCustomTimeIfZeroInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZeroInput"></a>

```java
public java.lang.Object getSendDaysSinceCustomTimeIfZeroInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendDaysSinceNoncurrentTimeIfZeroInput`<sup>Optional</sup> <a name="sendDaysSinceNoncurrentTimeIfZeroInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZeroInput"></a>

```java
public java.lang.Object getSendDaysSinceNoncurrentTimeIfZeroInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendNumNewerVersionsIfZeroInput`<sup>Optional</sup> <a name="sendNumNewerVersionsIfZeroInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZeroInput"></a>

```java
public java.lang.Object getSendNumNewerVersionsIfZeroInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `withStateInput`<sup>Optional</sup> <a name="withStateInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.withStateInput"></a>

```java
public java.lang.String getWithStateInput();
```

- *Type:* java.lang.String

---

##### `age`<sup>Required</sup> <a name="age" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.age"></a>

```java
public java.lang.Number getAge();
```

- *Type:* java.lang.Number

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

---

##### `customTimeBefore`<sup>Required</sup> <a name="customTimeBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore"></a>

```java
public java.lang.String getCustomTimeBefore();
```

- *Type:* java.lang.String

---

##### `daysSinceCustomTime`<sup>Required</sup> <a name="daysSinceCustomTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime"></a>

```java
public java.lang.Number getDaysSinceCustomTime();
```

- *Type:* java.lang.Number

---

##### `daysSinceNoncurrentTime`<sup>Required</sup> <a name="daysSinceNoncurrentTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime"></a>

```java
public java.lang.Number getDaysSinceNoncurrentTime();
```

- *Type:* java.lang.Number

---

##### `matchesPrefix`<sup>Required</sup> <a name="matchesPrefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix"></a>

```java
public java.util.List<java.lang.String> getMatchesPrefix();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchesStorageClass`<sup>Required</sup> <a name="matchesStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass"></a>

```java
public java.util.List<java.lang.String> getMatchesStorageClass();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchesSuffix`<sup>Required</sup> <a name="matchesSuffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix"></a>

```java
public java.util.List<java.lang.String> getMatchesSuffix();
```

- *Type:* java.util.List<java.lang.String>

---

##### `noncurrentTimeBefore`<sup>Required</sup> <a name="noncurrentTimeBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore"></a>

```java
public java.lang.String getNoncurrentTimeBefore();
```

- *Type:* java.lang.String

---

##### `numNewerVersions`<sup>Required</sup> <a name="numNewerVersions" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions"></a>

```java
public java.lang.Number getNumNewerVersions();
```

- *Type:* java.lang.Number

---

##### `sendAgeIfZero`<sup>Required</sup> <a name="sendAgeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero"></a>

```java
public java.lang.Object getSendAgeIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendDaysSinceCustomTimeIfZero`<sup>Required</sup> <a name="sendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero"></a>

```java
public java.lang.Object getSendDaysSinceCustomTimeIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendDaysSinceNoncurrentTimeIfZero`<sup>Required</sup> <a name="sendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```java
public java.lang.Object getSendDaysSinceNoncurrentTimeIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendNumNewerVersionsIfZero`<sup>Required</sup> <a name="sendNumNewerVersionsIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero"></a>

```java
public java.lang.Object getSendNumNewerVersionsIfZero();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `withState`<sup>Required</sup> <a name="withState" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.withState"></a>

```java
public java.lang.String getWithState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.internalValue"></a>

```java
public GoogleStorageBucketLifecycleRuleCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a>

---


### GoogleStorageBucketLifecycleRuleList <a name="GoogleStorageBucketLifecycleRuleList" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketLifecycleRuleList;

new GoogleStorageBucketLifecycleRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.get"></a>

```java
public GoogleStorageBucketLifecycleRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>>

---


### GoogleStorageBucketLifecycleRuleOutputReference <a name="GoogleStorageBucketLifecycleRuleOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketLifecycleRuleOutputReference;

new GoogleStorageBucketLifecycleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putAction"></a>

```java
public void putAction(GoogleStorageBucketLifecycleRuleAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a>

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition"></a>

```java
public void putCondition(GoogleStorageBucketLifecycleRuleCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference">GoogleStorageBucketLifecycleRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference">GoogleStorageBucketLifecycleRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.action"></a>

```java
public GoogleStorageBucketLifecycleRuleActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference">GoogleStorageBucketLifecycleRuleActionOutputReference</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.condition"></a>

```java
public GoogleStorageBucketLifecycleRuleConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference">GoogleStorageBucketLifecycleRuleConditionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.actionInput"></a>

```java
public GoogleStorageBucketLifecycleRuleAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.conditionInput"></a>

```java
public GoogleStorageBucketLifecycleRuleCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule">GoogleStorageBucketLifecycleRule</a>

---


### GoogleStorageBucketLoggingOutputReference <a name="GoogleStorageBucketLoggingOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketLoggingOutputReference;

new GoogleStorageBucketLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resetLogObjectPrefix">resetLogObjectPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogObjectPrefix` <a name="resetLogObjectPrefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resetLogObjectPrefix"></a>

```java
public void resetLogObjectPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logBucketInput">logBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logObjectPrefixInput">logObjectPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logBucket">logBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logObjectPrefix">logObjectPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logBucketInput`<sup>Optional</sup> <a name="logBucketInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logBucketInput"></a>

```java
public java.lang.String getLogBucketInput();
```

- *Type:* java.lang.String

---

##### `logObjectPrefixInput`<sup>Optional</sup> <a name="logObjectPrefixInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logObjectPrefixInput"></a>

```java
public java.lang.String getLogObjectPrefixInput();
```

- *Type:* java.lang.String

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logBucket"></a>

```java
public java.lang.String getLogBucket();
```

- *Type:* java.lang.String

---

##### `logObjectPrefix`<sup>Required</sup> <a name="logObjectPrefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logObjectPrefix"></a>

```java
public java.lang.String getLogObjectPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.internalValue"></a>

```java
public GoogleStorageBucketLogging getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

---


### GoogleStorageBucketRetentionPolicyOutputReference <a name="GoogleStorageBucketRetentionPolicyOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketRetentionPolicyOutputReference;

new GoogleStorageBucketRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resetIsLocked">resetIsLocked</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsLocked` <a name="resetIsLocked" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resetIsLocked"></a>

```java
public void resetIsLocked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.isLockedInput">isLockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.isLocked">isLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isLockedInput`<sup>Optional</sup> <a name="isLockedInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.isLockedInput"></a>

```java
public java.lang.Object getIsLockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput"></a>

```java
public java.lang.Number getRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `isLocked`<sup>Required</sup> <a name="isLocked" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.isLocked"></a>

```java
public java.lang.Object getIsLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.internalValue"></a>

```java
public GoogleStorageBucketRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

---


### GoogleStorageBucketSoftDeletePolicyOutputReference <a name="GoogleStorageBucketSoftDeletePolicyOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketSoftDeletePolicyOutputReference;

new GoogleStorageBucketSoftDeletePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resetRetentionDurationSeconds">resetRetentionDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionDurationSeconds` <a name="resetRetentionDurationSeconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resetRetentionDurationSeconds"></a>

```java
public void resetRetentionDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.effectiveTime">effectiveTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSecondsInput">retentionDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds">retentionDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.effectiveTime"></a>

```java
public java.lang.String getEffectiveTime();
```

- *Type:* java.lang.String

---

##### `retentionDurationSecondsInput`<sup>Optional</sup> <a name="retentionDurationSecondsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSecondsInput"></a>

```java
public java.lang.Number getRetentionDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `retentionDurationSeconds`<sup>Required</sup> <a name="retentionDurationSeconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds"></a>

```java
public java.lang.Number getRetentionDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.internalValue"></a>

```java
public GoogleStorageBucketSoftDeletePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

---


### GoogleStorageBucketTimeoutsOutputReference <a name="GoogleStorageBucketTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketTimeoutsOutputReference;

new GoogleStorageBucketTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>

---


### GoogleStorageBucketVersioningOutputReference <a name="GoogleStorageBucketVersioningOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketVersioningOutputReference;

new GoogleStorageBucketVersioningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.internalValue"></a>

```java
public GoogleStorageBucketVersioning getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

---


### GoogleStorageBucketWebsiteOutputReference <a name="GoogleStorageBucketWebsiteOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_bucket.GoogleStorageBucketWebsiteOutputReference;

new GoogleStorageBucketWebsiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resetMainPageSuffix">resetMainPageSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resetNotFoundPage">resetNotFoundPage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMainPageSuffix` <a name="resetMainPageSuffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resetMainPageSuffix"></a>

```java
public void resetMainPageSuffix()
```

##### `resetNotFoundPage` <a name="resetNotFoundPage" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resetNotFoundPage"></a>

```java
public void resetNotFoundPage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.mainPageSuffixInput">mainPageSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.notFoundPageInput">notFoundPageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.mainPageSuffix">mainPageSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.notFoundPage">notFoundPage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mainPageSuffixInput`<sup>Optional</sup> <a name="mainPageSuffixInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.mainPageSuffixInput"></a>

```java
public java.lang.String getMainPageSuffixInput();
```

- *Type:* java.lang.String

---

##### `notFoundPageInput`<sup>Optional</sup> <a name="notFoundPageInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.notFoundPageInput"></a>

```java
public java.lang.String getNotFoundPageInput();
```

- *Type:* java.lang.String

---

##### `mainPageSuffix`<sup>Required</sup> <a name="mainPageSuffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.mainPageSuffix"></a>

```java
public java.lang.String getMainPageSuffix();
```

- *Type:* java.lang.String

---

##### `notFoundPage`<sup>Required</sup> <a name="notFoundPage" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.notFoundPage"></a>

```java
public java.lang.String getNotFoundPage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.internalValue"></a>

```java
public GoogleStorageBucketWebsite getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

---



