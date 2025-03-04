# `googleWorkflowsWorkflow` Submodule <a name="`googleWorkflowsWorkflow` Submodule" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkflowsWorkflow <a name="GoogleWorkflowsWorkflow" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow google_workflows_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workflows_workflow.GoogleWorkflowsWorkflow;

GoogleWorkflowsWorkflow.Builder.create(Construct scope, java.lang.String id)
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
//  .callLogLevel(java.lang.String)
//  .cryptoKeyName(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .sourceContents(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GoogleWorkflowsWorkflowTimeouts)
//  .userEnvVars(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.callLogLevel">callLogLevel</a></code> | <code>java.lang.String</code> | Describes the level of platform logging to apply to calls and call responses during executions of this workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | The KMS key used to encrypt workflow and execution data. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the workflow provided by the user. Must be at most 1000 unicode characters long. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#id GoogleWorkflowsWorkflow#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to this Workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#name_prefix GoogleWorkflowsWorkflow#name_prefix}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#project GoogleWorkflowsWorkflow#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Name of the service account associated with the latest workflow version. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.sourceContents">sourceContents</a></code> | <code>java.lang.String</code> | Workflow code to be executed. The size limit is 128KB. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.userEnvVars">userEnvVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined environment variables associated with this workflow revision. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `callLogLevel`<sup>Optional</sup> <a name="callLogLevel" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.callLogLevel"></a>

- *Type:* java.lang.String

Describes the level of platform logging to apply to calls and call responses during executions of this workflow.

If both the workflow and the execution specify a logging level,
the execution level takes precedence. Possible values: ["CALL_LOG_LEVEL_UNSPECIFIED", "LOG_ALL_CALLS", "LOG_ERRORS_ONLY", "LOG_NONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#call_log_level GoogleWorkflowsWorkflow#call_log_level}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.cryptoKeyName"></a>

- *Type:* java.lang.String

The KMS key used to encrypt workflow and execution data.

Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#crypto_key_name GoogleWorkflowsWorkflow#crypto_key_name}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Terraform will be prevented from destroying the workflow.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the workflow,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the workflow will fail.
When the field is set to false, deleting the workflow is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#deletion_protection GoogleWorkflowsWorkflow#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the workflow provided by the user. Must be at most 1000 unicode characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#description GoogleWorkflowsWorkflow#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#id GoogleWorkflowsWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to this Workflow.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#labels GoogleWorkflowsWorkflow#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#name GoogleWorkflowsWorkflow#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#name_prefix GoogleWorkflowsWorkflow#name_prefix}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#project GoogleWorkflowsWorkflow#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#region GoogleWorkflowsWorkflow#region}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

Name of the service account associated with the latest workflow version.

This service
account represents the identity of the workflow and determines what permissions the workflow has.
Format: projects/{project}/serviceAccounts/{account} or {account}.
Using - as a wildcard for the {project} or not providing one at all will infer the project from the account.
The {account} value can be the email address or the unique_id of the service account.
If not provided, workflow will use the project's default service account.
Modifying this field for an existing workflow results in a new workflow revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#service_account GoogleWorkflowsWorkflow#service_account}

---

##### `sourceContents`<sup>Optional</sup> <a name="sourceContents" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.sourceContents"></a>

- *Type:* java.lang.String

Workflow code to be executed. The size limit is 128KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#source_contents GoogleWorkflowsWorkflow#source_contents}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition
as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in
the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#tags GoogleWorkflowsWorkflow#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#timeouts GoogleWorkflowsWorkflow#timeouts}

---

##### `userEnvVars`<sup>Optional</sup> <a name="userEnvVars" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.Initializer.parameter.userEnvVars"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined environment variables associated with this workflow revision.

This map has a maximum length of 20. Each string can take up to 4KiB. Keys cannot be empty strings and cannot start with “GOOGLE” or “WORKFLOWS".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#user_env_vars GoogleWorkflowsWorkflow#user_env_vars}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetCallLogLevel">resetCallLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetCryptoKeyName">resetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetSourceContents">resetSourceContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetUserEnvVars">resetUserEnvVars</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.putTimeouts"></a>

```java
public void putTimeouts(GoogleWorkflowsWorkflowTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a>

---

##### `resetCallLogLevel` <a name="resetCallLogLevel" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetCallLogLevel"></a>

```java
public void resetCallLogLevel()
```

##### `resetCryptoKeyName` <a name="resetCryptoKeyName" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetCryptoKeyName"></a>

```java
public void resetCryptoKeyName()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetSourceContents` <a name="resetSourceContents" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetSourceContents"></a>

```java
public void resetSourceContents()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserEnvVars` <a name="resetUserEnvVars" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.resetUserEnvVars"></a>

```java
public void resetUserEnvVars()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleWorkflowsWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workflows_workflow.GoogleWorkflowsWorkflow;

GoogleWorkflowsWorkflow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workflows_workflow.GoogleWorkflowsWorkflow;

GoogleWorkflowsWorkflow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workflows_workflow.GoogleWorkflowsWorkflow;

GoogleWorkflowsWorkflow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workflows_workflow.GoogleWorkflowsWorkflow;

GoogleWorkflowsWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleWorkflowsWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleWorkflowsWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleWorkflowsWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleWorkflowsWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleWorkflowsWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.revisionId">revisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference">GoogleWorkflowsWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.callLogLevelInput">callLogLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.cryptoKeyNameInput">cryptoKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.sourceContentsInput">sourceContentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.userEnvVarsInput">userEnvVarsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.callLogLevel">callLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.sourceContents">sourceContents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.userEnvVars">userEnvVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.revisionId"></a>

```java
public java.lang.String getRevisionId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.timeouts"></a>

```java
public GoogleWorkflowsWorkflowTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference">GoogleWorkflowsWorkflowTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `callLogLevelInput`<sup>Optional</sup> <a name="callLogLevelInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.callLogLevelInput"></a>

```java
public java.lang.String getCallLogLevelInput();
```

- *Type:* java.lang.String

---

##### `cryptoKeyNameInput`<sup>Optional</sup> <a name="cryptoKeyNameInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.cryptoKeyNameInput"></a>

```java
public java.lang.String getCryptoKeyNameInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `sourceContentsInput`<sup>Optional</sup> <a name="sourceContentsInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.sourceContentsInput"></a>

```java
public java.lang.String getSourceContentsInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a>

---

##### `userEnvVarsInput`<sup>Optional</sup> <a name="userEnvVarsInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.userEnvVarsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserEnvVarsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `callLogLevel`<sup>Required</sup> <a name="callLogLevel" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.callLogLevel"></a>

```java
public java.lang.String getCallLogLevel();
```

- *Type:* java.lang.String

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.cryptoKeyName"></a>

```java
public java.lang.String getCryptoKeyName();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `sourceContents`<sup>Required</sup> <a name="sourceContents" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.sourceContents"></a>

```java
public java.lang.String getSourceContents();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userEnvVars`<sup>Required</sup> <a name="userEnvVars" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.userEnvVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserEnvVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkflowsWorkflowConfig <a name="GoogleWorkflowsWorkflowConfig" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workflows_workflow.GoogleWorkflowsWorkflowConfig;

GoogleWorkflowsWorkflowConfig.builder()
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
//  .callLogLevel(java.lang.String)
//  .cryptoKeyName(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .sourceContents(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GoogleWorkflowsWorkflowTimeouts)
//  .userEnvVars(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.callLogLevel">callLogLevel</a></code> | <code>java.lang.String</code> | Describes the level of platform logging to apply to calls and call responses during executions of this workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | The KMS key used to encrypt workflow and execution data. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the workflow provided by the user. Must be at most 1000 unicode characters long. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#id GoogleWorkflowsWorkflow#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to this Workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#name_prefix GoogleWorkflowsWorkflow#name_prefix}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#project GoogleWorkflowsWorkflow#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Name of the service account associated with the latest workflow version. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.sourceContents">sourceContents</a></code> | <code>java.lang.String</code> | Workflow code to be executed. The size limit is 128KB. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.userEnvVars">userEnvVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined environment variables associated with this workflow revision. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `callLogLevel`<sup>Optional</sup> <a name="callLogLevel" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.callLogLevel"></a>

```java
public java.lang.String getCallLogLevel();
```

- *Type:* java.lang.String

Describes the level of platform logging to apply to calls and call responses during executions of this workflow.

If both the workflow and the execution specify a logging level,
the execution level takes precedence. Possible values: ["CALL_LOG_LEVEL_UNSPECIFIED", "LOG_ALL_CALLS", "LOG_ERRORS_ONLY", "LOG_NONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#call_log_level GoogleWorkflowsWorkflow#call_log_level}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.cryptoKeyName"></a>

```java
public java.lang.String getCryptoKeyName();
```

- *Type:* java.lang.String

The KMS key used to encrypt workflow and execution data.

Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#crypto_key_name GoogleWorkflowsWorkflow#crypto_key_name}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Terraform will be prevented from destroying the workflow.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the workflow,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the workflow will fail.
When the field is set to false, deleting the workflow is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#deletion_protection GoogleWorkflowsWorkflow#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the workflow provided by the user. Must be at most 1000 unicode characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#description GoogleWorkflowsWorkflow#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#id GoogleWorkflowsWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to this Workflow.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#labels GoogleWorkflowsWorkflow#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#name GoogleWorkflowsWorkflow#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#name_prefix GoogleWorkflowsWorkflow#name_prefix}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#project GoogleWorkflowsWorkflow#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#region GoogleWorkflowsWorkflow#region}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Name of the service account associated with the latest workflow version.

This service
account represents the identity of the workflow and determines what permissions the workflow has.
Format: projects/{project}/serviceAccounts/{account} or {account}.
Using - as a wildcard for the {project} or not providing one at all will infer the project from the account.
The {account} value can be the email address or the unique_id of the service account.
If not provided, workflow will use the project's default service account.
Modifying this field for an existing workflow results in a new workflow revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#service_account GoogleWorkflowsWorkflow#service_account}

---

##### `sourceContents`<sup>Optional</sup> <a name="sourceContents" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.sourceContents"></a>

```java
public java.lang.String getSourceContents();
```

- *Type:* java.lang.String

Workflow code to be executed. The size limit is 128KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#source_contents GoogleWorkflowsWorkflow#source_contents}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition
as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in
the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#tags GoogleWorkflowsWorkflow#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.timeouts"></a>

```java
public GoogleWorkflowsWorkflowTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#timeouts GoogleWorkflowsWorkflow#timeouts}

---

##### `userEnvVars`<sup>Optional</sup> <a name="userEnvVars" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowConfig.property.userEnvVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserEnvVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined environment variables associated with this workflow revision.

This map has a maximum length of 20. Each string can take up to 4KiB. Keys cannot be empty strings and cannot start with “GOOGLE” or “WORKFLOWS".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#user_env_vars GoogleWorkflowsWorkflow#user_env_vars}

---

### GoogleWorkflowsWorkflowTimeouts <a name="GoogleWorkflowsWorkflowTimeouts" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workflows_workflow.GoogleWorkflowsWorkflowTimeouts;

GoogleWorkflowsWorkflowTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#create GoogleWorkflowsWorkflow#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#delete GoogleWorkflowsWorkflow#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#update GoogleWorkflowsWorkflow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#create GoogleWorkflowsWorkflow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#delete GoogleWorkflowsWorkflow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workflows_workflow#update GoogleWorkflowsWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkflowsWorkflowTimeoutsOutputReference <a name="GoogleWorkflowsWorkflowTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workflows_workflow.GoogleWorkflowsWorkflowTimeoutsOutputReference;

new GoogleWorkflowsWorkflowTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkflowsWorkflow.GoogleWorkflowsWorkflowTimeouts">GoogleWorkflowsWorkflowTimeouts</a>

---



