# `googleFolderOrganizationPolicy` Submodule <a name="`googleFolderOrganizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFolderOrganizationPolicy <a name="GoogleFolderOrganizationPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy google_folder_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicy;

GoogleFolderOrganizationPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .constraint(java.lang.String)
    .folder(java.lang.String)
//  .booleanPolicy(GoogleFolderOrganizationPolicyBooleanPolicy)
//  .id(java.lang.String)
//  .listPolicy(GoogleFolderOrganizationPolicyListPolicy)
//  .restorePolicy(GoogleFolderOrganizationPolicyRestorePolicy)
//  .timeouts(GoogleFolderOrganizationPolicyTimeouts)
//  .version(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.constraint">constraint</a></code> | <code>java.lang.String</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The resource name of the folder to set the policy for. Its format is folders/{folder_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#id GoogleFolderOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.listPolicy">listPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.version">version</a></code> | <code>java.lang.Number</code> | Version of the Policy. Default version is 0. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.constraint"></a>

- *Type:* java.lang.String

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#constraint GoogleFolderOrganizationPolicy#constraint}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The resource name of the folder to set the policy for. Its format is folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#folder GoogleFolderOrganizationPolicy#folder}

---

##### `booleanPolicy`<sup>Optional</sup> <a name="booleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.booleanPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#boolean_policy GoogleFolderOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#id GoogleFolderOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listPolicy`<sup>Optional</sup> <a name="listPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.listPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#list_policy GoogleFolderOrganizationPolicy#list_policy}

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.restorePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#restore_policy GoogleFolderOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#timeouts GoogleFolderOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.version"></a>

- *Type:* java.lang.Number

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#version GoogleFolderOrganizationPolicy#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putBooleanPolicy">putBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy">putListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putRestorePolicy">putRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetBooleanPolicy">resetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetListPolicy">resetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetRestorePolicy">resetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBooleanPolicy` <a name="putBooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putBooleanPolicy"></a>

```java
public void putBooleanPolicy(GoogleFolderOrganizationPolicyBooleanPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

---

##### `putListPolicy` <a name="putListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy"></a>

```java
public void putListPolicy(GoogleFolderOrganizationPolicyListPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

---

##### `putRestorePolicy` <a name="putRestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putRestorePolicy"></a>

```java
public void putRestorePolicy(GoogleFolderOrganizationPolicyRestorePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleFolderOrganizationPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>

---

##### `resetBooleanPolicy` <a name="resetBooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetBooleanPolicy"></a>

```java
public void resetBooleanPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetListPolicy` <a name="resetListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetListPolicy"></a>

```java
public void resetListPolicy()
```

##### `resetRestorePolicy` <a name="resetRestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetRestorePolicy"></a>

```java
public void resetRestorePolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFolderOrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicy;

GoogleFolderOrganizationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicy;

GoogleFolderOrganizationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicy;

GoogleFolderOrganizationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicy;

GoogleFolderOrganizationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFolderOrganizationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleFolderOrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFolderOrganizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFolderOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFolderOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference">GoogleFolderOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference">GoogleFolderOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference">GoogleFolderOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference">GoogleFolderOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicyInput">booleanPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraintInput">constraintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicyInput">listPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicyInput">restorePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraint">constraint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `booleanPolicy`<sup>Required</sup> <a name="booleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicy"></a>

```java
public GoogleFolderOrganizationPolicyBooleanPolicyOutputReference getBooleanPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference">GoogleFolderOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `listPolicy`<sup>Required</sup> <a name="listPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicy"></a>

```java
public GoogleFolderOrganizationPolicyListPolicyOutputReference getListPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference">GoogleFolderOrganizationPolicyListPolicyOutputReference</a>

---

##### `restorePolicy`<sup>Required</sup> <a name="restorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicy"></a>

```java
public GoogleFolderOrganizationPolicyRestorePolicyOutputReference getRestorePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference">GoogleFolderOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeouts"></a>

```java
public GoogleFolderOrganizationPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference">GoogleFolderOrganizationPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `booleanPolicyInput`<sup>Optional</sup> <a name="booleanPolicyInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicyInput"></a>

```java
public GoogleFolderOrganizationPolicyBooleanPolicy getBooleanPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraintInput"></a>

```java
public java.lang.String getConstraintInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listPolicyInput`<sup>Optional</sup> <a name="listPolicyInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicyInput"></a>

```java
public GoogleFolderOrganizationPolicyListPolicy getListPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

---

##### `restorePolicyInput`<sup>Optional</sup> <a name="restorePolicyInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicyInput"></a>

```java
public GoogleFolderOrganizationPolicyRestorePolicy getRestorePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraint"></a>

```java
public java.lang.String getConstraint();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFolderOrganizationPolicyBooleanPolicy <a name="GoogleFolderOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyBooleanPolicy;

GoogleFolderOrganizationPolicyBooleanPolicy.builder()
    .enforced(java.lang.Boolean)
    .enforced(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy.property.enforced">enforced</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy.property.enforced"></a>

```java
public java.lang.Object getEnforced();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#enforced GoogleFolderOrganizationPolicy#enforced}

---

### GoogleFolderOrganizationPolicyConfig <a name="GoogleFolderOrganizationPolicyConfig" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyConfig;

GoogleFolderOrganizationPolicyConfig.builder()
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
    .constraint(java.lang.String)
    .folder(java.lang.String)
//  .booleanPolicy(GoogleFolderOrganizationPolicyBooleanPolicy)
//  .id(java.lang.String)
//  .listPolicy(GoogleFolderOrganizationPolicyListPolicy)
//  .restorePolicy(GoogleFolderOrganizationPolicyRestorePolicy)
//  .timeouts(GoogleFolderOrganizationPolicyTimeouts)
//  .version(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>java.lang.String</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The resource name of the folder to set the policy for. Its format is folders/{folder_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#id GoogleFolderOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.version">version</a></code> | <code>java.lang.Number</code> | Version of the Policy. Default version is 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.constraint"></a>

```java
public java.lang.String getConstraint();
```

- *Type:* java.lang.String

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#constraint GoogleFolderOrganizationPolicy#constraint}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The resource name of the folder to set the policy for. Its format is folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#folder GoogleFolderOrganizationPolicy#folder}

---

##### `booleanPolicy`<sup>Optional</sup> <a name="booleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.booleanPolicy"></a>

```java
public GoogleFolderOrganizationPolicyBooleanPolicy getBooleanPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#boolean_policy GoogleFolderOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#id GoogleFolderOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listPolicy`<sup>Optional</sup> <a name="listPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.listPolicy"></a>

```java
public GoogleFolderOrganizationPolicyListPolicy getListPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#list_policy GoogleFolderOrganizationPolicy#list_policy}

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.restorePolicy"></a>

```java
public GoogleFolderOrganizationPolicyRestorePolicy getRestorePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#restore_policy GoogleFolderOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.timeouts"></a>

```java
public GoogleFolderOrganizationPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#timeouts GoogleFolderOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#version GoogleFolderOrganizationPolicy#version}

---

### GoogleFolderOrganizationPolicyListPolicy <a name="GoogleFolderOrganizationPolicyListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyListPolicy;

GoogleFolderOrganizationPolicyListPolicy.builder()
//  .allow(GoogleFolderOrganizationPolicyListPolicyAllow)
//  .deny(GoogleFolderOrganizationPolicyListPolicyDeny)
//  .inheritFromParent(java.lang.Boolean)
//  .inheritFromParent(IResolvable)
//  .suggestedValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.suggestedValue">suggestedValue</a></code> | <code>java.lang.String</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.allow"></a>

```java
public GoogleFolderOrganizationPolicyListPolicyAllow getAllow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#allow GoogleFolderOrganizationPolicy#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.deny"></a>

```java
public GoogleFolderOrganizationPolicyListPolicyDeny getDeny();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#deny GoogleFolderOrganizationPolicy#deny}

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```java
public java.lang.Object getInheritFromParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#inherit_from_parent GoogleFolderOrganizationPolicy#inherit_from_parent}

---

##### `suggestedValue`<sup>Optional</sup> <a name="suggestedValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.suggestedValue"></a>

```java
public java.lang.String getSuggestedValue();
```

- *Type:* java.lang.String

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#suggested_value GoogleFolderOrganizationPolicy#suggested_value}

---

### GoogleFolderOrganizationPolicyListPolicyAllow <a name="GoogleFolderOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyListPolicyAllow;

GoogleFolderOrganizationPolicyListPolicyAllow.builder()
//  .all(java.lang.Boolean)
//  .all(IResolvable)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#all GoogleFolderOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#values GoogleFolderOrganizationPolicy#values}

---

### GoogleFolderOrganizationPolicyListPolicyDeny <a name="GoogleFolderOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyListPolicyDeny;

GoogleFolderOrganizationPolicyListPolicyDeny.builder()
//  .all(java.lang.Boolean)
//  .all(IResolvable)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#all GoogleFolderOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#values GoogleFolderOrganizationPolicy#values}

---

### GoogleFolderOrganizationPolicyRestorePolicy <a name="GoogleFolderOrganizationPolicyRestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyRestorePolicy;

GoogleFolderOrganizationPolicyRestorePolicy.builder()
    .default(java.lang.Boolean)
    .default(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#default GoogleFolderOrganizationPolicy#default}

---

### GoogleFolderOrganizationPolicyTimeouts <a name="GoogleFolderOrganizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyTimeouts;

GoogleFolderOrganizationPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#create GoogleFolderOrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#delete GoogleFolderOrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#read GoogleFolderOrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#update GoogleFolderOrganizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#create GoogleFolderOrganizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#delete GoogleFolderOrganizationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#read GoogleFolderOrganizationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#update GoogleFolderOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFolderOrganizationPolicyBooleanPolicyOutputReference <a name="GoogleFolderOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference;

new GoogleFolderOrganizationPolicyBooleanPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">enforcedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```java
public java.lang.Object getEnforcedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```java
public java.lang.Object getEnforced();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```java
public GoogleFolderOrganizationPolicyBooleanPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

---


### GoogleFolderOrganizationPolicyListPolicyAllowOutputReference <a name="GoogleFolderOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference;

new GoogleFolderOrganizationPolicyListPolicyAllowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput">allInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```java
public java.lang.Object getAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```java
public GoogleFolderOrganizationPolicyListPolicyAllow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

---


### GoogleFolderOrganizationPolicyListPolicyDenyOutputReference <a name="GoogleFolderOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference;

new GoogleFolderOrganizationPolicyListPolicyDenyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput">allInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```java
public java.lang.Object getAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```java
public GoogleFolderOrganizationPolicyListPolicyDeny getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

---


### GoogleFolderOrganizationPolicyListPolicyOutputReference <a name="GoogleFolderOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyListPolicyOutputReference;

new GoogleFolderOrganizationPolicyListPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">resetSuggestedValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllow` <a name="putAllow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```java
public void putAllow(GoogleFolderOrganizationPolicyListPolicyAllow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

---

##### `putDeny` <a name="putDeny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```java
public void putDeny(GoogleFolderOrganizationPolicyListPolicyDeny value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```java
public void resetAllow()
```

##### `resetDeny` <a name="resetDeny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```java
public void resetDeny()
```

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```java
public void resetInheritFromParent()
```

##### `resetSuggestedValue` <a name="resetSuggestedValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```java
public void resetSuggestedValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference">GoogleFolderOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference">GoogleFolderOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allowInput">allowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.denyInput">denyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">suggestedValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggestedValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```java
public GoogleFolderOrganizationPolicyListPolicyAllowOutputReference getAllow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference">GoogleFolderOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```java
public GoogleFolderOrganizationPolicyListPolicyDenyOutputReference getDeny();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference">GoogleFolderOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```java
public GoogleFolderOrganizationPolicyListPolicyAllow getAllowInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```java
public GoogleFolderOrganizationPolicyListPolicyDeny getDenyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```java
public java.lang.Object getInheritFromParentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suggestedValueInput`<sup>Optional</sup> <a name="suggestedValueInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```java
public java.lang.String getSuggestedValueInput();
```

- *Type:* java.lang.String

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```java
public java.lang.Object getInheritFromParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suggestedValue`<sup>Required</sup> <a name="suggestedValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```java
public java.lang.String getSuggestedValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```java
public GoogleFolderOrganizationPolicyListPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

---


### GoogleFolderOrganizationPolicyRestorePolicyOutputReference <a name="GoogleFolderOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference;

new GoogleFolderOrganizationPolicyRestorePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```java
public java.lang.Object getDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```java
public GoogleFolderOrganizationPolicyRestorePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

---


### GoogleFolderOrganizationPolicyTimeoutsOutputReference <a name="GoogleFolderOrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_folder_organization_policy.GoogleFolderOrganizationPolicyTimeoutsOutputReference;

new GoogleFolderOrganizationPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>

---



