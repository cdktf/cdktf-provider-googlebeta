# `googleStorageBatchOperationsJob` Submodule <a name="`googleStorageBatchOperationsJob` Submodule" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageBatchOperationsJob <a name="GoogleStorageBatchOperationsJob" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job google_storage_batch_operations_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJob;

GoogleStorageBatchOperationsJob.Builder.create(Construct scope, java.lang.String id)
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
//  .bucketList(GoogleStorageBatchOperationsJobBucketListStruct)
//  .deleteObject(GoogleStorageBatchOperationsJobDeleteObject)
//  .deleteProtection(java.lang.Boolean)
//  .deleteProtection(IResolvable)
//  .id(java.lang.String)
//  .jobId(java.lang.String)
//  .project(java.lang.String)
//  .putMetadata(GoogleStorageBatchOperationsJobPutMetadata)
//  .putObjectHold(GoogleStorageBatchOperationsJobPutObjectHold)
//  .rewriteObject(GoogleStorageBatchOperationsJobRewriteObject)
//  .timeouts(GoogleStorageBatchOperationsJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.bucketList">bucketList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a></code> | bucket_list block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.deleteObject">deleteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a></code> | delete_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.deleteProtection">deleteProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to 'true', the storage batch operation job will not be deleted and new job will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#id GoogleStorageBatchOperationsJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.jobId">jobId</a></code> | <code>java.lang.String</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#project GoogleStorageBatchOperationsJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.putMetadata">putMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a></code> | put_metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.putObjectHold">putObjectHold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a></code> | put_object_hold block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.rewriteObject">rewriteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a></code> | rewrite_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketList`<sup>Optional</sup> <a name="bucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.bucketList"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

bucket_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#bucket_list GoogleStorageBatchOperationsJob#bucket_list}

---

##### `deleteObject`<sup>Optional</sup> <a name="deleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.deleteObject"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

delete_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#delete_object GoogleStorageBatchOperationsJob#delete_object}

---

##### `deleteProtection`<sup>Optional</sup> <a name="deleteProtection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.deleteProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to 'true', the storage batch operation job will not be deleted and new job will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#delete_protection GoogleStorageBatchOperationsJob#delete_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#id GoogleStorageBatchOperationsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.jobId"></a>

- *Type:* java.lang.String

The ID of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#job_id GoogleStorageBatchOperationsJob#job_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#project GoogleStorageBatchOperationsJob#project}.

---

##### `putMetadata`<sup>Optional</sup> <a name="putMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.putMetadata"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

put_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#put_metadata GoogleStorageBatchOperationsJob#put_metadata}

---

##### `putObjectHold`<sup>Optional</sup> <a name="putObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.putObjectHold"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

put_object_hold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#put_object_hold GoogleStorageBatchOperationsJob#put_object_hold}

---

##### `rewriteObject`<sup>Optional</sup> <a name="rewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.rewriteObject"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

rewrite_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#rewrite_object GoogleStorageBatchOperationsJob#rewrite_object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#timeouts GoogleStorageBatchOperationsJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putBucketList">putBucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putDeleteObject">putDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutMetadata">putPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutObjectHold">putPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putRewriteObject">putRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetBucketList">resetBucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetDeleteObject">resetDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetDeleteProtection">resetDeleteProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetJobId">resetJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetPutMetadata">resetPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetPutObjectHold">resetPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetRewriteObject">resetRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBucketList` <a name="putBucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putBucketList"></a>

```java
public void putBucketList(GoogleStorageBatchOperationsJobBucketListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putBucketList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

---

##### `putDeleteObject` <a name="putDeleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putDeleteObject"></a>

```java
public void putDeleteObject(GoogleStorageBatchOperationsJobDeleteObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putDeleteObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

---

##### `putPutMetadata` <a name="putPutMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutMetadata"></a>

```java
public void putPutMetadata(GoogleStorageBatchOperationsJobPutMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

---

##### `putPutObjectHold` <a name="putPutObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutObjectHold"></a>

```java
public void putPutObjectHold(GoogleStorageBatchOperationsJobPutObjectHold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutObjectHold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

---

##### `putRewriteObject` <a name="putRewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putRewriteObject"></a>

```java
public void putRewriteObject(GoogleStorageBatchOperationsJobRewriteObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putRewriteObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putTimeouts"></a>

```java
public void putTimeouts(GoogleStorageBatchOperationsJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a>

---

##### `resetBucketList` <a name="resetBucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetBucketList"></a>

```java
public void resetBucketList()
```

##### `resetDeleteObject` <a name="resetDeleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetDeleteObject"></a>

```java
public void resetDeleteObject()
```

##### `resetDeleteProtection` <a name="resetDeleteProtection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetDeleteProtection"></a>

```java
public void resetDeleteProtection()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetId"></a>

```java
public void resetId()
```

##### `resetJobId` <a name="resetJobId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetJobId"></a>

```java
public void resetJobId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetPutMetadata` <a name="resetPutMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetPutMetadata"></a>

```java
public void resetPutMetadata()
```

##### `resetPutObjectHold` <a name="resetPutObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetPutObjectHold"></a>

```java
public void resetPutObjectHold()
```

##### `resetRewriteObject` <a name="resetRewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetRewriteObject"></a>

```java
public void resetRewriteObject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageBatchOperationsJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJob;

GoogleStorageBatchOperationsJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJob;

GoogleStorageBatchOperationsJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJob;

GoogleStorageBatchOperationsJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJob;

GoogleStorageBatchOperationsJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleStorageBatchOperationsJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleStorageBatchOperationsJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleStorageBatchOperationsJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleStorageBatchOperationsJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageBatchOperationsJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.bucketList">bucketList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference">GoogleStorageBatchOperationsJobBucketListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.completeTime">completeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteObject">deleteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference">GoogleStorageBatchOperationsJobDeleteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putMetadata">putMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference">GoogleStorageBatchOperationsJobPutMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putObjectHold">putObjectHold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference">GoogleStorageBatchOperationsJobPutObjectHoldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.rewriteObject">rewriteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference">GoogleStorageBatchOperationsJobRewriteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.scheduleTime">scheduleTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference">GoogleStorageBatchOperationsJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.bucketListInput">bucketListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteObjectInput">deleteObjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteProtectionInput">deleteProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.jobIdInput">jobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putMetadataInput">putMetadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putObjectHoldInput">putObjectHoldInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.rewriteObjectInput">rewriteObjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteProtection">deleteProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketList`<sup>Required</sup> <a name="bucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.bucketList"></a>

```java
public GoogleStorageBatchOperationsJobBucketListStructOutputReference getBucketList();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference">GoogleStorageBatchOperationsJobBucketListStructOutputReference</a>

---

##### `completeTime`<sup>Required</sup> <a name="completeTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.completeTime"></a>

```java
public java.lang.String getCompleteTime();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteObject`<sup>Required</sup> <a name="deleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteObject"></a>

```java
public GoogleStorageBatchOperationsJobDeleteObjectOutputReference getDeleteObject();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference">GoogleStorageBatchOperationsJobDeleteObjectOutputReference</a>

---

##### `putMetadata`<sup>Required</sup> <a name="putMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putMetadata"></a>

```java
public GoogleStorageBatchOperationsJobPutMetadataOutputReference getPutMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference">GoogleStorageBatchOperationsJobPutMetadataOutputReference</a>

---

##### `putObjectHold`<sup>Required</sup> <a name="putObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putObjectHold"></a>

```java
public GoogleStorageBatchOperationsJobPutObjectHoldOutputReference getPutObjectHold();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference">GoogleStorageBatchOperationsJobPutObjectHoldOutputReference</a>

---

##### `rewriteObject`<sup>Required</sup> <a name="rewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.rewriteObject"></a>

```java
public GoogleStorageBatchOperationsJobRewriteObjectOutputReference getRewriteObject();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference">GoogleStorageBatchOperationsJobRewriteObjectOutputReference</a>

---

##### `scheduleTime`<sup>Required</sup> <a name="scheduleTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.scheduleTime"></a>

```java
public java.lang.String getScheduleTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.timeouts"></a>

```java
public GoogleStorageBatchOperationsJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference">GoogleStorageBatchOperationsJobTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `bucketListInput`<sup>Optional</sup> <a name="bucketListInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.bucketListInput"></a>

```java
public GoogleStorageBatchOperationsJobBucketListStruct getBucketListInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

---

##### `deleteObjectInput`<sup>Optional</sup> <a name="deleteObjectInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteObjectInput"></a>

```java
public GoogleStorageBatchOperationsJobDeleteObject getDeleteObjectInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

---

##### `deleteProtectionInput`<sup>Optional</sup> <a name="deleteProtectionInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteProtectionInput"></a>

```java
public java.lang.Object getDeleteProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.jobIdInput"></a>

```java
public java.lang.String getJobIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `putMetadataInput`<sup>Optional</sup> <a name="putMetadataInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putMetadataInput"></a>

```java
public GoogleStorageBatchOperationsJobPutMetadata getPutMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

---

##### `putObjectHoldInput`<sup>Optional</sup> <a name="putObjectHoldInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putObjectHoldInput"></a>

```java
public GoogleStorageBatchOperationsJobPutObjectHold getPutObjectHoldInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

---

##### `rewriteObjectInput`<sup>Optional</sup> <a name="rewriteObjectInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.rewriteObjectInput"></a>

```java
public GoogleStorageBatchOperationsJobRewriteObject getRewriteObjectInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a>

---

##### `deleteProtection`<sup>Required</sup> <a name="deleteProtection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteProtection"></a>

```java
public java.lang.Object getDeleteProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageBatchOperationsJobBucketListBuckets <a name="GoogleStorageBatchOperationsJobBucketListBuckets" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobBucketListBuckets;

GoogleStorageBatchOperationsJobBucketListBuckets.builder()
    .bucket(java.lang.String)
//  .manifest(GoogleStorageBatchOperationsJobBucketListBucketsManifest)
//  .prefixList(GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Bucket name for the objects to be transformed. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.prefixList">prefixList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | prefix_list block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Bucket name for the objects to be transformed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#bucket GoogleStorageBatchOperationsJob#bucket}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.manifest"></a>

```java
public GoogleStorageBatchOperationsJobBucketListBucketsManifest getManifest();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#manifest GoogleStorageBatchOperationsJob#manifest}

---

##### `prefixList`<sup>Optional</sup> <a name="prefixList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.prefixList"></a>

```java
public GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct getPrefixList();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

prefix_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#prefix_list GoogleStorageBatchOperationsJob#prefix_list}

---

### GoogleStorageBatchOperationsJobBucketListBucketsManifest <a name="GoogleStorageBatchOperationsJobBucketListBucketsManifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobBucketListBucketsManifest;

GoogleStorageBatchOperationsJobBucketListBucketsManifest.builder()
//  .manifestLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation">manifestLocation</a></code> | <code>java.lang.String</code> | Specifies objects in a manifest file. |

---

##### `manifestLocation`<sup>Optional</sup> <a name="manifestLocation" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation"></a>

```java
public java.lang.String getManifestLocation();
```

- *Type:* java.lang.String

Specifies objects in a manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#manifest_location GoogleStorageBatchOperationsJob#manifest_location}

---

### GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct <a name="GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct;

GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct.builder()
//  .includedObjectPrefixes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes">includedObjectPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#included_object_prefixes GoogleStorageBatchOperationsJob#included_object_prefixes}. |

---

##### `includedObjectPrefixes`<sup>Optional</sup> <a name="includedObjectPrefixes" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes"></a>

```java
public java.util.List<java.lang.String> getIncludedObjectPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#included_object_prefixes GoogleStorageBatchOperationsJob#included_object_prefixes}.

---

### GoogleStorageBatchOperationsJobBucketListStruct <a name="GoogleStorageBatchOperationsJobBucketListStruct" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobBucketListStruct;

GoogleStorageBatchOperationsJobBucketListStruct.builder()
    .buckets(GoogleStorageBatchOperationsJobBucketListBuckets)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct.property.buckets">buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a></code> | buckets block. |

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct.property.buckets"></a>

```java
public GoogleStorageBatchOperationsJobBucketListBuckets getBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a>

buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#buckets GoogleStorageBatchOperationsJob#buckets}

---

### GoogleStorageBatchOperationsJobConfig <a name="GoogleStorageBatchOperationsJobConfig" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobConfig;

GoogleStorageBatchOperationsJobConfig.builder()
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
//  .bucketList(GoogleStorageBatchOperationsJobBucketListStruct)
//  .deleteObject(GoogleStorageBatchOperationsJobDeleteObject)
//  .deleteProtection(java.lang.Boolean)
//  .deleteProtection(IResolvable)
//  .id(java.lang.String)
//  .jobId(java.lang.String)
//  .project(java.lang.String)
//  .putMetadata(GoogleStorageBatchOperationsJobPutMetadata)
//  .putObjectHold(GoogleStorageBatchOperationsJobPutObjectHold)
//  .rewriteObject(GoogleStorageBatchOperationsJobRewriteObject)
//  .timeouts(GoogleStorageBatchOperationsJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.bucketList">bucketList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a></code> | bucket_list block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.deleteObject">deleteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a></code> | delete_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.deleteProtection">deleteProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to 'true', the storage batch operation job will not be deleted and new job will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#id GoogleStorageBatchOperationsJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.jobId">jobId</a></code> | <code>java.lang.String</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#project GoogleStorageBatchOperationsJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.putMetadata">putMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a></code> | put_metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.putObjectHold">putObjectHold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a></code> | put_object_hold block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.rewriteObject">rewriteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a></code> | rewrite_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketList`<sup>Optional</sup> <a name="bucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.bucketList"></a>

```java
public GoogleStorageBatchOperationsJobBucketListStruct getBucketList();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

bucket_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#bucket_list GoogleStorageBatchOperationsJob#bucket_list}

---

##### `deleteObject`<sup>Optional</sup> <a name="deleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.deleteObject"></a>

```java
public GoogleStorageBatchOperationsJobDeleteObject getDeleteObject();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

delete_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#delete_object GoogleStorageBatchOperationsJob#delete_object}

---

##### `deleteProtection`<sup>Optional</sup> <a name="deleteProtection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.deleteProtection"></a>

```java
public java.lang.Object getDeleteProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to 'true', the storage batch operation job will not be deleted and new job will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#delete_protection GoogleStorageBatchOperationsJob#delete_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#id GoogleStorageBatchOperationsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

The ID of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#job_id GoogleStorageBatchOperationsJob#job_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#project GoogleStorageBatchOperationsJob#project}.

---

##### `putMetadata`<sup>Optional</sup> <a name="putMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.putMetadata"></a>

```java
public GoogleStorageBatchOperationsJobPutMetadata getPutMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

put_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#put_metadata GoogleStorageBatchOperationsJob#put_metadata}

---

##### `putObjectHold`<sup>Optional</sup> <a name="putObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.putObjectHold"></a>

```java
public GoogleStorageBatchOperationsJobPutObjectHold getPutObjectHold();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

put_object_hold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#put_object_hold GoogleStorageBatchOperationsJob#put_object_hold}

---

##### `rewriteObject`<sup>Optional</sup> <a name="rewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.rewriteObject"></a>

```java
public GoogleStorageBatchOperationsJobRewriteObject getRewriteObject();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

rewrite_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#rewrite_object GoogleStorageBatchOperationsJob#rewrite_object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.timeouts"></a>

```java
public GoogleStorageBatchOperationsJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#timeouts GoogleStorageBatchOperationsJob#timeouts}

---

### GoogleStorageBatchOperationsJobDeleteObject <a name="GoogleStorageBatchOperationsJobDeleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobDeleteObject;

GoogleStorageBatchOperationsJobDeleteObject.builder()
    .permanentObjectDeletionEnabled(java.lang.Boolean)
    .permanentObjectDeletionEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled">permanentObjectDeletionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | enable flag to permanently delete object and all object versions if versioning is enabled on bucket. |

---

##### `permanentObjectDeletionEnabled`<sup>Required</sup> <a name="permanentObjectDeletionEnabled" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled"></a>

```java
public java.lang.Object getPermanentObjectDeletionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

enable flag to permanently delete object and all object versions if versioning is enabled on bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#permanent_object_deletion_enabled GoogleStorageBatchOperationsJob#permanent_object_deletion_enabled}

---

### GoogleStorageBatchOperationsJobPutMetadata <a name="GoogleStorageBatchOperationsJobPutMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobPutMetadata;

GoogleStorageBatchOperationsJobPutMetadata.builder()
//  .cacheControl(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .customMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .customTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Content Encoding of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Content-Type of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.customTime">customTime</a></code> | <code>java.lang.String</code> | Updates the objects fixed custom time metadata. |

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#cache_control GoogleStorageBatchOperationsJob#cache_control}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#content_disposition GoogleStorageBatchOperationsJob#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

Content Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#content_encoding GoogleStorageBatchOperationsJob#content_encoding}

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#content_language GoogleStorageBatchOperationsJob#content_language}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Content-Type of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#content_type GoogleStorageBatchOperationsJob#content_type}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.customMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#custom_metadata GoogleStorageBatchOperationsJob#custom_metadata}

---

##### `customTime`<sup>Optional</sup> <a name="customTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.customTime"></a>

```java
public java.lang.String getCustomTime();
```

- *Type:* java.lang.String

Updates the objects fixed custom time metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#custom_time GoogleStorageBatchOperationsJob#custom_time}

---

### GoogleStorageBatchOperationsJobPutObjectHold <a name="GoogleStorageBatchOperationsJobPutObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobPutObjectHold;

GoogleStorageBatchOperationsJobPutObjectHold.builder()
//  .eventBasedHold(java.lang.String)
//  .temporaryHold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.property.eventBasedHold">eventBasedHold</a></code> | <code>java.lang.String</code> | set/unset to update event based hold for objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.property.temporaryHold">temporaryHold</a></code> | <code>java.lang.String</code> | set/unset to update temporary based hold for objects. |

---

##### `eventBasedHold`<sup>Optional</sup> <a name="eventBasedHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.property.eventBasedHold"></a>

```java
public java.lang.String getEventBasedHold();
```

- *Type:* java.lang.String

set/unset to update event based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#event_based_hold GoogleStorageBatchOperationsJob#event_based_hold}

---

##### `temporaryHold`<sup>Optional</sup> <a name="temporaryHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.property.temporaryHold"></a>

```java
public java.lang.String getTemporaryHold();
```

- *Type:* java.lang.String

set/unset to update temporary based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#temporary_hold GoogleStorageBatchOperationsJob#temporary_hold}

---

### GoogleStorageBatchOperationsJobRewriteObject <a name="GoogleStorageBatchOperationsJobRewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobRewriteObject;

GoogleStorageBatchOperationsJobRewriteObject.builder()
    .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | valid kms key. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

valid kms key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#kms_key GoogleStorageBatchOperationsJob#kms_key}

---

### GoogleStorageBatchOperationsJobTimeouts <a name="GoogleStorageBatchOperationsJobTimeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobTimeouts;

GoogleStorageBatchOperationsJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#create GoogleStorageBatchOperationsJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#delete GoogleStorageBatchOperationsJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#update GoogleStorageBatchOperationsJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#create GoogleStorageBatchOperationsJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#delete GoogleStorageBatchOperationsJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_storage_batch_operations_job#update GoogleStorageBatchOperationsJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference <a name="GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference;

new GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation">resetManifestLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManifestLocation` <a name="resetManifestLocation" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation"></a>

```java
public void resetManifestLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput">manifestLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation">manifestLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manifestLocationInput`<sup>Optional</sup> <a name="manifestLocationInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput"></a>

```java
public java.lang.String getManifestLocationInput();
```

- *Type:* java.lang.String

---

##### `manifestLocation`<sup>Required</sup> <a name="manifestLocation" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation"></a>

```java
public java.lang.String getManifestLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue"></a>

```java
public GoogleStorageBatchOperationsJobBucketListBucketsManifest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a>

---


### GoogleStorageBatchOperationsJobBucketListBucketsOutputReference <a name="GoogleStorageBatchOperationsJobBucketListBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference;

new GoogleStorageBatchOperationsJobBucketListBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putManifest">putManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList">putPrefixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest">resetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList">resetPrefixList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManifest` <a name="putManifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putManifest"></a>

```java
public void putManifest(GoogleStorageBatchOperationsJobBucketListBucketsManifest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `putPrefixList` <a name="putPrefixList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList"></a>

```java
public void putPrefixList(GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `resetManifest` <a name="resetManifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest"></a>

```java
public void resetManifest()
```

##### `resetPrefixList` <a name="resetPrefixList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList"></a>

```java
public void resetPrefixList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList">prefixList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput">manifestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput">prefixListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest"></a>

```java
public GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference getManifest();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference</a>

---

##### `prefixList`<sup>Required</sup> <a name="prefixList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList"></a>

```java
public GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference getPrefixList();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput"></a>

```java
public GoogleStorageBatchOperationsJobBucketListBucketsManifest getManifestInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `prefixListInput`<sup>Optional</sup> <a name="prefixListInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput"></a>

```java
public GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct getPrefixListInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue"></a>

```java
public GoogleStorageBatchOperationsJobBucketListBuckets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a>

---


### GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference <a name="GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference;

new GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes">resetIncludedObjectPrefixes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludedObjectPrefixes` <a name="resetIncludedObjectPrefixes" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes"></a>

```java
public void resetIncludedObjectPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput">includedObjectPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes">includedObjectPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includedObjectPrefixesInput`<sup>Optional</sup> <a name="includedObjectPrefixesInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getIncludedObjectPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedObjectPrefixes`<sup>Required</sup> <a name="includedObjectPrefixes" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes"></a>

```java
public java.util.List<java.lang.String> getIncludedObjectPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue"></a>

```java
public GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---


### GoogleStorageBatchOperationsJobBucketListStructOutputReference <a name="GoogleStorageBatchOperationsJobBucketListStructOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobBucketListStructOutputReference;

new GoogleStorageBatchOperationsJobBucketListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.putBuckets">putBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBuckets` <a name="putBuckets" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.putBuckets"></a>

```java
public void putBuckets(GoogleStorageBatchOperationsJobBucketListBuckets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.putBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.buckets">buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput">bucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.buckets"></a>

```java
public GoogleStorageBatchOperationsJobBucketListBucketsOutputReference getBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsOutputReference</a>

---

##### `bucketsInput`<sup>Optional</sup> <a name="bucketsInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput"></a>

```java
public GoogleStorageBatchOperationsJobBucketListBuckets getBucketsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.internalValue"></a>

```java
public GoogleStorageBatchOperationsJobBucketListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

---


### GoogleStorageBatchOperationsJobDeleteObjectOutputReference <a name="GoogleStorageBatchOperationsJobDeleteObjectOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobDeleteObjectOutputReference;

new GoogleStorageBatchOperationsJobDeleteObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput">permanentObjectDeletionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled">permanentObjectDeletionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `permanentObjectDeletionEnabledInput`<sup>Optional</sup> <a name="permanentObjectDeletionEnabledInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput"></a>

```java
public java.lang.Object getPermanentObjectDeletionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `permanentObjectDeletionEnabled`<sup>Required</sup> <a name="permanentObjectDeletionEnabled" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled"></a>

```java
public java.lang.Object getPermanentObjectDeletionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue"></a>

```java
public GoogleStorageBatchOperationsJobDeleteObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

---


### GoogleStorageBatchOperationsJobPutMetadataOutputReference <a name="GoogleStorageBatchOperationsJobPutMetadataOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobPutMetadataOutputReference;

new GoogleStorageBatchOperationsJobPutMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata">resetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime">resetCustomTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl"></a>

```java
public void resetCacheControl()
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition"></a>

```java
public void resetContentDisposition()
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding"></a>

```java
public void resetContentEncoding()
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage"></a>

```java
public void resetContentLanguage()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetCustomMetadata` <a name="resetCustomMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata"></a>

```java
public void resetCustomMetadata()
```

##### `resetCustomTime` <a name="resetCustomTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime"></a>

```java
public void resetCustomTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput">cacheControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput">contentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput">contentEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput">contentLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput">customMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput">customTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customTime">customTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput"></a>

```java
public java.lang.String getCacheControlInput();
```

- *Type:* java.lang.String

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput"></a>

```java
public java.lang.String getContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput"></a>

```java
public java.lang.String getContentEncodingInput();
```

- *Type:* java.lang.String

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput"></a>

```java
public java.lang.String getContentLanguageInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `customMetadataInput`<sup>Optional</sup> <a name="customMetadataInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customTimeInput`<sup>Optional</sup> <a name="customTimeInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput"></a>

```java
public java.lang.String getCustomTimeInput();
```

- *Type:* java.lang.String

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customTime`<sup>Required</sup> <a name="customTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customTime"></a>

```java
public java.lang.String getCustomTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.internalValue"></a>

```java
public GoogleStorageBatchOperationsJobPutMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

---


### GoogleStorageBatchOperationsJobPutObjectHoldOutputReference <a name="GoogleStorageBatchOperationsJobPutObjectHoldOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference;

new GoogleStorageBatchOperationsJobPutObjectHoldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold">resetEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold">resetTemporaryHold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventBasedHold` <a name="resetEventBasedHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold"></a>

```java
public void resetEventBasedHold()
```

##### `resetTemporaryHold` <a name="resetTemporaryHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold"></a>

```java
public void resetTemporaryHold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput">eventBasedHoldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput">temporaryHoldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold">eventBasedHold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold">temporaryHold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventBasedHoldInput`<sup>Optional</sup> <a name="eventBasedHoldInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput"></a>

```java
public java.lang.String getEventBasedHoldInput();
```

- *Type:* java.lang.String

---

##### `temporaryHoldInput`<sup>Optional</sup> <a name="temporaryHoldInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput"></a>

```java
public java.lang.String getTemporaryHoldInput();
```

- *Type:* java.lang.String

---

##### `eventBasedHold`<sup>Required</sup> <a name="eventBasedHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold"></a>

```java
public java.lang.String getEventBasedHold();
```

- *Type:* java.lang.String

---

##### `temporaryHold`<sup>Required</sup> <a name="temporaryHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold"></a>

```java
public java.lang.String getTemporaryHold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue"></a>

```java
public GoogleStorageBatchOperationsJobPutObjectHold getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

---


### GoogleStorageBatchOperationsJobRewriteObjectOutputReference <a name="GoogleStorageBatchOperationsJobRewriteObjectOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobRewriteObjectOutputReference;

new GoogleStorageBatchOperationsJobRewriteObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue"></a>

```java
public GoogleStorageBatchOperationsJobRewriteObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

---


### GoogleStorageBatchOperationsJobTimeoutsOutputReference <a name="GoogleStorageBatchOperationsJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_batch_operations_job.GoogleStorageBatchOperationsJobTimeoutsOutputReference;

new GoogleStorageBatchOperationsJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a>

---



