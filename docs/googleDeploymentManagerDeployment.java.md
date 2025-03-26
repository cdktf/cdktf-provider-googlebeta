# `googleDeploymentManagerDeployment` Submodule <a name="`googleDeploymentManagerDeployment` Submodule" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeploymentManagerDeployment <a name="GoogleDeploymentManagerDeployment" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment google_deployment_manager_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeployment;

GoogleDeploymentManagerDeployment.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .target(GoogleDeploymentManagerDeploymentTarget)
//  .createPolicy(java.lang.String)
//  .deletePolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<GoogleDeploymentManagerDeploymentLabels>)
//  .preview(java.lang.Boolean)
//  .preview(IResolvable)
//  .project(java.lang.String)
//  .timeouts(GoogleDeploymentManagerDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for the deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.createPolicy">createPolicy</a></code> | <code>java.lang.String</code> | Set the policy to use for creating new resources. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.deletePolicy">deletePolicy</a></code> | <code>java.lang.String</code> | Set the policy to use for deleting new resources on update/delete. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional user-provided description of deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#id GoogleDeploymentManagerDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.preview">preview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, a deployment is created with "shell" resources that are not actually instantiated. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#project GoogleDeploymentManagerDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#name GoogleDeploymentManagerDeployment#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#target GoogleDeploymentManagerDeployment#target}

---

##### `createPolicy`<sup>Optional</sup> <a name="createPolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.createPolicy"></a>

- *Type:* java.lang.String

Set the policy to use for creating new resources.

Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#create_policy GoogleDeploymentManagerDeployment#create_policy}

---

##### `deletePolicy`<sup>Optional</sup> <a name="deletePolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.deletePolicy"></a>

- *Type:* java.lang.String

Set the policy to use for deleting new resources on update/delete.

Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#delete_policy GoogleDeploymentManagerDeployment#delete_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional user-provided description of deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#description GoogleDeploymentManagerDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#id GoogleDeploymentManagerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.labels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#labels GoogleDeploymentManagerDeployment#labels}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.preview"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, a deployment is created with "shell" resources that are not actually instantiated.

This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#preview GoogleDeploymentManagerDeployment#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#project GoogleDeploymentManagerDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#timeouts GoogleDeploymentManagerDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetCreatePolicy">resetCreatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetDeletePolicy">resetDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetPreview">resetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<GoogleDeploymentManagerDeploymentLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTarget"></a>

```java
public void putTarget(GoogleDeploymentManagerDeploymentTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTimeouts"></a>

```java
public void putTimeouts(GoogleDeploymentManagerDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>

---

##### `resetCreatePolicy` <a name="resetCreatePolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetCreatePolicy"></a>

```java
public void resetCreatePolicy()
```

##### `resetDeletePolicy` <a name="resetDeletePolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetDeletePolicy"></a>

```java
public void resetDeletePolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPreview` <a name="resetPreview" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetPreview"></a>

```java
public void resetPreview()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDeploymentManagerDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeployment;

GoogleDeploymentManagerDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeployment;

GoogleDeploymentManagerDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeployment;

GoogleDeploymentManagerDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeployment;

GoogleDeploymentManagerDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDeploymentManagerDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDeploymentManagerDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDeploymentManagerDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDeploymentManagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDeploymentManagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList">GoogleDeploymentManagerDeploymentLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.manifest">manifest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference">GoogleDeploymentManagerDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference">GoogleDeploymentManagerDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.createPolicyInput">createPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deletePolicyInput">deletePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.previewInput">previewInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.createPolicy">createPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deletePolicy">deletePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.preview">preview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.labels"></a>

```java
public GoogleDeploymentManagerDeploymentLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList">GoogleDeploymentManagerDeploymentLabelsList</a>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.manifest"></a>

```java
public java.lang.String getManifest();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.target"></a>

```java
public GoogleDeploymentManagerDeploymentTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference">GoogleDeploymentManagerDeploymentTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.timeouts"></a>

```java
public GoogleDeploymentManagerDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference">GoogleDeploymentManagerDeploymentTimeoutsOutputReference</a>

---

##### `createPolicyInput`<sup>Optional</sup> <a name="createPolicyInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.createPolicyInput"></a>

```java
public java.lang.String getCreatePolicyInput();
```

- *Type:* java.lang.String

---

##### `deletePolicyInput`<sup>Optional</sup> <a name="deletePolicyInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deletePolicyInput"></a>

```java
public java.lang.String getDeletePolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `previewInput`<sup>Optional</sup> <a name="previewInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.previewInput"></a>

```java
public java.lang.Object getPreviewInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.targetInput"></a>

```java
public GoogleDeploymentManagerDeploymentTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>

---

##### `createPolicy`<sup>Required</sup> <a name="createPolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.createPolicy"></a>

```java
public java.lang.String getCreatePolicy();
```

- *Type:* java.lang.String

---

##### `deletePolicy`<sup>Required</sup> <a name="deletePolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deletePolicy"></a>

```java
public java.lang.String getDeletePolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.preview"></a>

```java
public java.lang.Object getPreview();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeploymentManagerDeploymentConfig <a name="GoogleDeploymentManagerDeploymentConfig" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentConfig;

GoogleDeploymentManagerDeploymentConfig.builder()
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
    .name(java.lang.String)
    .target(GoogleDeploymentManagerDeploymentTarget)
//  .createPolicy(java.lang.String)
//  .deletePolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<GoogleDeploymentManagerDeploymentLabels>)
//  .preview(java.lang.Boolean)
//  .preview(IResolvable)
//  .project(java.lang.String)
//  .timeouts(GoogleDeploymentManagerDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for the deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.createPolicy">createPolicy</a></code> | <code>java.lang.String</code> | Set the policy to use for creating new resources. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.deletePolicy">deletePolicy</a></code> | <code>java.lang.String</code> | Set the policy to use for deleting new resources on update/delete. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional user-provided description of deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#id GoogleDeploymentManagerDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.preview">preview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, a deployment is created with "shell" resources that are not actually instantiated. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#project GoogleDeploymentManagerDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#name GoogleDeploymentManagerDeployment#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.target"></a>

```java
public GoogleDeploymentManagerDeploymentTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#target GoogleDeploymentManagerDeployment#target}

---

##### `createPolicy`<sup>Optional</sup> <a name="createPolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.createPolicy"></a>

```java
public java.lang.String getCreatePolicy();
```

- *Type:* java.lang.String

Set the policy to use for creating new resources.

Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#create_policy GoogleDeploymentManagerDeployment#create_policy}

---

##### `deletePolicy`<sup>Optional</sup> <a name="deletePolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.deletePolicy"></a>

```java
public java.lang.String getDeletePolicy();
```

- *Type:* java.lang.String

Set the policy to use for deleting new resources on update/delete.

Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#delete_policy GoogleDeploymentManagerDeployment#delete_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional user-provided description of deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#description GoogleDeploymentManagerDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#id GoogleDeploymentManagerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#labels GoogleDeploymentManagerDeployment#labels}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.preview"></a>

```java
public java.lang.Object getPreview();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, a deployment is created with "shell" resources that are not actually instantiated.

This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#preview GoogleDeploymentManagerDeployment#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#project GoogleDeploymentManagerDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.timeouts"></a>

```java
public GoogleDeploymentManagerDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#timeouts GoogleDeploymentManagerDeployment#timeouts}

---

### GoogleDeploymentManagerDeploymentLabels <a name="GoogleDeploymentManagerDeploymentLabels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentLabels;

GoogleDeploymentManagerDeploymentLabels.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.property.key">key</a></code> | <code>java.lang.String</code> | Key for label. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.property.value">value</a></code> | <code>java.lang.String</code> | Value of label. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Key for label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#key GoogleDeploymentManagerDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#value GoogleDeploymentManagerDeployment#value}

---

### GoogleDeploymentManagerDeploymentTarget <a name="GoogleDeploymentManagerDeploymentTarget" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentTarget;

GoogleDeploymentManagerDeploymentTarget.builder()
    .config(GoogleDeploymentManagerDeploymentTargetConfig)
//  .imports(IResolvable)
//  .imports(java.util.List<GoogleDeploymentManagerDeploymentTargetImports>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.property.imports">imports</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>></code> | imports block. |

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.property.config"></a>

```java
public GoogleDeploymentManagerDeploymentTargetConfig getConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#config GoogleDeploymentManagerDeployment#config}

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.property.imports"></a>

```java
public java.lang.Object getImports();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>>

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#imports GoogleDeploymentManagerDeployment#imports}

---

### GoogleDeploymentManagerDeploymentTargetConfig <a name="GoogleDeploymentManagerDeploymentTargetConfig" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentTargetConfig;

GoogleDeploymentManagerDeploymentTargetConfig.builder()
    .content(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig.property.content">content</a></code> | <code>java.lang.String</code> | The full YAML contents of your configuration file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The full YAML contents of your configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#content GoogleDeploymentManagerDeployment#content}

---

### GoogleDeploymentManagerDeploymentTargetImports <a name="GoogleDeploymentManagerDeploymentTargetImports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentTargetImports;

GoogleDeploymentManagerDeploymentTargetImports.builder()
//  .content(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.property.content">content</a></code> | <code>java.lang.String</code> | The full contents of the template that you want to import. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.property.name">name</a></code> | <code>java.lang.String</code> | The name of the template to import, as declared in the YAML configuration. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The full contents of the template that you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#content GoogleDeploymentManagerDeployment#content}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the template to import, as declared in the YAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#name GoogleDeploymentManagerDeployment#name}

---

### GoogleDeploymentManagerDeploymentTimeouts <a name="GoogleDeploymentManagerDeploymentTimeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentTimeouts;

GoogleDeploymentManagerDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#create GoogleDeploymentManagerDeployment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#delete GoogleDeploymentManagerDeployment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#update GoogleDeploymentManagerDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#create GoogleDeploymentManagerDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#delete GoogleDeploymentManagerDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_deployment_manager_deployment#update GoogleDeploymentManagerDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeploymentManagerDeploymentLabelsList <a name="GoogleDeploymentManagerDeploymentLabelsList" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentLabelsList;

new GoogleDeploymentManagerDeploymentLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.get"></a>

```java
public GoogleDeploymentManagerDeploymentLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>>

---


### GoogleDeploymentManagerDeploymentLabelsOutputReference <a name="GoogleDeploymentManagerDeploymentLabelsOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentLabelsOutputReference;

new GoogleDeploymentManagerDeploymentLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>

---


### GoogleDeploymentManagerDeploymentTargetConfigOutputReference <a name="GoogleDeploymentManagerDeploymentTargetConfigOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference;

new GoogleDeploymentManagerDeploymentTargetConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue"></a>

```java
public GoogleDeploymentManagerDeploymentTargetConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a>

---


### GoogleDeploymentManagerDeploymentTargetImportsList <a name="GoogleDeploymentManagerDeploymentTargetImportsList" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentTargetImportsList;

new GoogleDeploymentManagerDeploymentTargetImportsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.get"></a>

```java
public GoogleDeploymentManagerDeploymentTargetImportsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>>

---


### GoogleDeploymentManagerDeploymentTargetImportsOutputReference <a name="GoogleDeploymentManagerDeploymentTargetImportsOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference;

new GoogleDeploymentManagerDeploymentTargetImportsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>

---


### GoogleDeploymentManagerDeploymentTargetOutputReference <a name="GoogleDeploymentManagerDeploymentTargetOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentTargetOutputReference;

new GoogleDeploymentManagerDeploymentTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putImports">putImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resetImports">resetImports</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putConfig"></a>

```java
public void putConfig(GoogleDeploymentManagerDeploymentTargetConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a>

---

##### `putImports` <a name="putImports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putImports"></a>

```java
public void putImports(IResolvable OR java.util.List<GoogleDeploymentManagerDeploymentTargetImports> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putImports.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>>

---

##### `resetImports` <a name="resetImports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resetImports"></a>

```java
public void resetImports()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference">GoogleDeploymentManagerDeploymentTargetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.imports">imports</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList">GoogleDeploymentManagerDeploymentTargetImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.importsInput">importsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.config"></a>

```java
public GoogleDeploymentManagerDeploymentTargetConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference">GoogleDeploymentManagerDeploymentTargetConfigOutputReference</a>

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.imports"></a>

```java
public GoogleDeploymentManagerDeploymentTargetImportsList getImports();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList">GoogleDeploymentManagerDeploymentTargetImportsList</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.configInput"></a>

```java
public GoogleDeploymentManagerDeploymentTargetConfig getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a>

---

##### `importsInput`<sup>Optional</sup> <a name="importsInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.importsInput"></a>

```java
public java.lang.Object getImportsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.internalValue"></a>

```java
public GoogleDeploymentManagerDeploymentTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

---


### GoogleDeploymentManagerDeploymentTimeoutsOutputReference <a name="GoogleDeploymentManagerDeploymentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_deployment_manager_deployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference;

new GoogleDeploymentManagerDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>

---



