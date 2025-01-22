# `googleProjectOrganizationPolicy` Submodule <a name="`googleProjectOrganizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProjectOrganizationPolicy <a name="GoogleProjectOrganizationPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy google_project_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicy;

GoogleProjectOrganizationPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .project(java.lang.String)
//  .booleanPolicy(GoogleProjectOrganizationPolicyBooleanPolicy)
//  .id(java.lang.String)
//  .listPolicy(GoogleProjectOrganizationPolicyListPolicy)
//  .restorePolicy(GoogleProjectOrganizationPolicyRestorePolicy)
//  .timeouts(GoogleProjectOrganizationPolicyTimeouts)
//  .version(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.constraint">constraint</a></code> | <code>java.lang.String</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#id GoogleProjectOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.listPolicy">listPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.version">version</a></code> | <code>java.lang.Number</code> | Version of the Policy. Default version is 0. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.constraint"></a>

- *Type:* java.lang.String

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#constraint GoogleProjectOrganizationPolicy#constraint}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#project GoogleProjectOrganizationPolicy#project}

---

##### `booleanPolicy`<sup>Optional</sup> <a name="booleanPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.booleanPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#boolean_policy GoogleProjectOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#id GoogleProjectOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listPolicy`<sup>Optional</sup> <a name="listPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.listPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#list_policy GoogleProjectOrganizationPolicy#list_policy}

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.restorePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#restore_policy GoogleProjectOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#timeouts GoogleProjectOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.version"></a>

- *Type:* java.lang.Number

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#version GoogleProjectOrganizationPolicy#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putBooleanPolicy">putBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putListPolicy">putListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putRestorePolicy">putRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetBooleanPolicy">resetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetListPolicy">resetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetRestorePolicy">resetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBooleanPolicy` <a name="putBooleanPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putBooleanPolicy"></a>

```java
public void putBooleanPolicy(GoogleProjectOrganizationPolicyBooleanPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

---

##### `putListPolicy` <a name="putListPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putListPolicy"></a>

```java
public void putListPolicy(GoogleProjectOrganizationPolicyListPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

---

##### `putRestorePolicy` <a name="putRestorePolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putRestorePolicy"></a>

```java
public void putRestorePolicy(GoogleProjectOrganizationPolicyRestorePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleProjectOrganizationPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>

---

##### `resetBooleanPolicy` <a name="resetBooleanPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetBooleanPolicy"></a>

```java
public void resetBooleanPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetListPolicy` <a name="resetListPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetListPolicy"></a>

```java
public void resetListPolicy()
```

##### `resetRestorePolicy` <a name="resetRestorePolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetRestorePolicy"></a>

```java
public void resetRestorePolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleProjectOrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicy;

GoogleProjectOrganizationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicy;

GoogleProjectOrganizationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicy;

GoogleProjectOrganizationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicy;

GoogleProjectOrganizationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleProjectOrganizationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleProjectOrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleProjectOrganizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleProjectOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProjectOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference">GoogleProjectOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference">GoogleProjectOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference">GoogleProjectOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference">GoogleProjectOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.booleanPolicyInput">booleanPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.constraintInput">constraintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.listPolicyInput">listPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.restorePolicyInput">restorePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.constraint">constraint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `booleanPolicy`<sup>Required</sup> <a name="booleanPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.booleanPolicy"></a>

```java
public GoogleProjectOrganizationPolicyBooleanPolicyOutputReference getBooleanPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference">GoogleProjectOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `listPolicy`<sup>Required</sup> <a name="listPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.listPolicy"></a>

```java
public GoogleProjectOrganizationPolicyListPolicyOutputReference getListPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference">GoogleProjectOrganizationPolicyListPolicyOutputReference</a>

---

##### `restorePolicy`<sup>Required</sup> <a name="restorePolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.restorePolicy"></a>

```java
public GoogleProjectOrganizationPolicyRestorePolicyOutputReference getRestorePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference">GoogleProjectOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.timeouts"></a>

```java
public GoogleProjectOrganizationPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference">GoogleProjectOrganizationPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `booleanPolicyInput`<sup>Optional</sup> <a name="booleanPolicyInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.booleanPolicyInput"></a>

```java
public GoogleProjectOrganizationPolicyBooleanPolicy getBooleanPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.constraintInput"></a>

```java
public java.lang.String getConstraintInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listPolicyInput`<sup>Optional</sup> <a name="listPolicyInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.listPolicyInput"></a>

```java
public GoogleProjectOrganizationPolicyListPolicy getListPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `restorePolicyInput`<sup>Optional</sup> <a name="restorePolicyInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.restorePolicyInput"></a>

```java
public GoogleProjectOrganizationPolicyRestorePolicy getRestorePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.constraint"></a>

```java
public java.lang.String getConstraint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProjectOrganizationPolicyBooleanPolicy <a name="GoogleProjectOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyBooleanPolicy;

GoogleProjectOrganizationPolicyBooleanPolicy.builder()
    .enforced(java.lang.Boolean)
    .enforced(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy.property.enforced">enforced</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy.property.enforced"></a>

```java
public java.lang.Object getEnforced();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#enforced GoogleProjectOrganizationPolicy#enforced}

---

### GoogleProjectOrganizationPolicyConfig <a name="GoogleProjectOrganizationPolicyConfig" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyConfig;

GoogleProjectOrganizationPolicyConfig.builder()
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
    .project(java.lang.String)
//  .booleanPolicy(GoogleProjectOrganizationPolicyBooleanPolicy)
//  .id(java.lang.String)
//  .listPolicy(GoogleProjectOrganizationPolicyListPolicy)
//  .restorePolicy(GoogleProjectOrganizationPolicyRestorePolicy)
//  .timeouts(GoogleProjectOrganizationPolicyTimeouts)
//  .version(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>java.lang.String</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#id GoogleProjectOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.version">version</a></code> | <code>java.lang.Number</code> | Version of the Policy. Default version is 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.constraint"></a>

```java
public java.lang.String getConstraint();
```

- *Type:* java.lang.String

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#constraint GoogleProjectOrganizationPolicy#constraint}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#project GoogleProjectOrganizationPolicy#project}

---

##### `booleanPolicy`<sup>Optional</sup> <a name="booleanPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.booleanPolicy"></a>

```java
public GoogleProjectOrganizationPolicyBooleanPolicy getBooleanPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#boolean_policy GoogleProjectOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#id GoogleProjectOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listPolicy`<sup>Optional</sup> <a name="listPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.listPolicy"></a>

```java
public GoogleProjectOrganizationPolicyListPolicy getListPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#list_policy GoogleProjectOrganizationPolicy#list_policy}

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.restorePolicy"></a>

```java
public GoogleProjectOrganizationPolicyRestorePolicy getRestorePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#restore_policy GoogleProjectOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.timeouts"></a>

```java
public GoogleProjectOrganizationPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#timeouts GoogleProjectOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#version GoogleProjectOrganizationPolicy#version}

---

### GoogleProjectOrganizationPolicyListPolicy <a name="GoogleProjectOrganizationPolicyListPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyListPolicy;

GoogleProjectOrganizationPolicyListPolicy.builder()
//  .allow(GoogleProjectOrganizationPolicyListPolicyAllow)
//  .deny(GoogleProjectOrganizationPolicyListPolicyDeny)
//  .inheritFromParent(java.lang.Boolean)
//  .inheritFromParent(IResolvable)
//  .suggestedValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.suggestedValue">suggestedValue</a></code> | <code>java.lang.String</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.allow"></a>

```java
public GoogleProjectOrganizationPolicyListPolicyAllow getAllow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#allow GoogleProjectOrganizationPolicy#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.deny"></a>

```java
public GoogleProjectOrganizationPolicyListPolicyDeny getDeny();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#deny GoogleProjectOrganizationPolicy#deny}

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```java
public java.lang.Object getInheritFromParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#inherit_from_parent GoogleProjectOrganizationPolicy#inherit_from_parent}

---

##### `suggestedValue`<sup>Optional</sup> <a name="suggestedValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.suggestedValue"></a>

```java
public java.lang.String getSuggestedValue();
```

- *Type:* java.lang.String

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#suggested_value GoogleProjectOrganizationPolicy#suggested_value}

---

### GoogleProjectOrganizationPolicyListPolicyAllow <a name="GoogleProjectOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyListPolicyAllow;

GoogleProjectOrganizationPolicyListPolicyAllow.builder()
//  .all(java.lang.Boolean)
//  .all(IResolvable)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#all GoogleProjectOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#values GoogleProjectOrganizationPolicy#values}

---

### GoogleProjectOrganizationPolicyListPolicyDeny <a name="GoogleProjectOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyListPolicyDeny;

GoogleProjectOrganizationPolicyListPolicyDeny.builder()
//  .all(java.lang.Boolean)
//  .all(IResolvable)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#all GoogleProjectOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#values GoogleProjectOrganizationPolicy#values}

---

### GoogleProjectOrganizationPolicyRestorePolicy <a name="GoogleProjectOrganizationPolicyRestorePolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyRestorePolicy;

GoogleProjectOrganizationPolicyRestorePolicy.builder()
    .default(java.lang.Boolean)
    .default(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#default GoogleProjectOrganizationPolicy#default}

---

### GoogleProjectOrganizationPolicyTimeouts <a name="GoogleProjectOrganizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyTimeouts;

GoogleProjectOrganizationPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#create GoogleProjectOrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#delete GoogleProjectOrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#read GoogleProjectOrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#update GoogleProjectOrganizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#create GoogleProjectOrganizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#delete GoogleProjectOrganizationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#read GoogleProjectOrganizationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#update GoogleProjectOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleProjectOrganizationPolicyBooleanPolicyOutputReference <a name="GoogleProjectOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference;

new GoogleProjectOrganizationPolicyBooleanPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">enforcedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```java
public java.lang.Object getEnforcedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```java
public java.lang.Object getEnforced();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```java
public GoogleProjectOrganizationPolicyBooleanPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

---


### GoogleProjectOrganizationPolicyListPolicyAllowOutputReference <a name="GoogleProjectOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference;

new GoogleProjectOrganizationPolicyListPolicyAllowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.allInput">allInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```java
public java.lang.Object getAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```java
public GoogleProjectOrganizationPolicyListPolicyAllow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a>

---


### GoogleProjectOrganizationPolicyListPolicyDenyOutputReference <a name="GoogleProjectOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference;

new GoogleProjectOrganizationPolicyListPolicyDenyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.allInput">allInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```java
public java.lang.Object getAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```java
public GoogleProjectOrganizationPolicyListPolicyDeny getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a>

---


### GoogleProjectOrganizationPolicyListPolicyOutputReference <a name="GoogleProjectOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyListPolicyOutputReference;

new GoogleProjectOrganizationPolicyListPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">resetSuggestedValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllow` <a name="putAllow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```java
public void putAllow(GoogleProjectOrganizationPolicyListPolicyAllow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a>

---

##### `putDeny` <a name="putDeny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```java
public void putDeny(GoogleProjectOrganizationPolicyListPolicyDeny value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```java
public void resetAllow()
```

##### `resetDeny` <a name="resetDeny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```java
public void resetDeny()
```

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```java
public void resetInheritFromParent()
```

##### `resetSuggestedValue` <a name="resetSuggestedValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```java
public void resetSuggestedValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference">GoogleProjectOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference">GoogleProjectOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.allowInput">allowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.denyInput">denyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">suggestedValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggestedValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```java
public GoogleProjectOrganizationPolicyListPolicyAllowOutputReference getAllow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference">GoogleProjectOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```java
public GoogleProjectOrganizationPolicyListPolicyDenyOutputReference getDeny();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference">GoogleProjectOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```java
public GoogleProjectOrganizationPolicyListPolicyAllow getAllowInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```java
public GoogleProjectOrganizationPolicyListPolicyDeny getDenyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a>

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```java
public java.lang.Object getInheritFromParentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suggestedValueInput`<sup>Optional</sup> <a name="suggestedValueInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```java
public java.lang.String getSuggestedValueInput();
```

- *Type:* java.lang.String

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```java
public java.lang.Object getInheritFromParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suggestedValue`<sup>Required</sup> <a name="suggestedValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```java
public java.lang.String getSuggestedValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```java
public GoogleProjectOrganizationPolicyListPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

---


### GoogleProjectOrganizationPolicyRestorePolicyOutputReference <a name="GoogleProjectOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference;

new GoogleProjectOrganizationPolicyRestorePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```java
public java.lang.Object getDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```java
public GoogleProjectOrganizationPolicyRestorePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

---


### GoogleProjectOrganizationPolicyTimeoutsOutputReference <a name="GoogleProjectOrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_project_organization_policy.GoogleProjectOrganizationPolicyTimeoutsOutputReference;

new GoogleProjectOrganizationPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>

---



