# `googleResourceManagerLien` Submodule <a name="`googleResourceManagerLien` Submodule" id="@cdktf/provider-google-beta.googleResourceManagerLien"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleResourceManagerLien <a name="GoogleResourceManagerLien" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien google_resource_manager_lien}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_resource_manager_lien.GoogleResourceManagerLien;

GoogleResourceManagerLien.Builder.create(Construct scope, java.lang.String id)
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
    .origin(java.lang.String)
    .parent(java.lang.String)
    .reason(java.lang.String)
    .restrictions(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(GoogleResourceManagerLienTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.origin">origin</a></code> | <code>java.lang.String</code> | A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | A reference to the resource this Lien is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.reason">reason</a></code> | <code>java.lang.String</code> | Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.restrictions">restrictions</a></code> | <code>java.util.List<java.lang.String></code> | The types of operations which should be blocked as a result of this Lien. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#id GoogleResourceManagerLien#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.origin"></a>

- *Type:* java.lang.String

A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#origin GoogleResourceManagerLien#origin}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

A reference to the resource this Lien is attached to.

The server will validate the parent against those for which Liens are supported.
Since a variety of objects can have Liens against them, you must provide the type
prefix (e.g. "projects/my-project-name").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#parent GoogleResourceManagerLien#parent}

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.reason"></a>

- *Type:* java.lang.String

Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#reason GoogleResourceManagerLien#reason}

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.restrictions"></a>

- *Type:* java.util.List<java.lang.String>

The types of operations which should be blocked as a result of this Lien.

Each value should correspond to an IAM permission. The server will validate
the permissions against those for which Liens are supported.  An empty
list is meaningless and will be rejected.
e.g. ['resourcemanager.projects.delete']

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#restrictions GoogleResourceManagerLien#restrictions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#id GoogleResourceManagerLien#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#timeouts GoogleResourceManagerLien#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.putTimeouts"></a>

```java
public void putTimeouts(GoogleResourceManagerLienTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleResourceManagerLien resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_resource_manager_lien.GoogleResourceManagerLien;

GoogleResourceManagerLien.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_resource_manager_lien.GoogleResourceManagerLien;

GoogleResourceManagerLien.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_resource_manager_lien.GoogleResourceManagerLien;

GoogleResourceManagerLien.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_resource_manager_lien.GoogleResourceManagerLien;

GoogleResourceManagerLien.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleResourceManagerLien.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleResourceManagerLien resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleResourceManagerLien to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleResourceManagerLien that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleResourceManagerLien to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference">GoogleResourceManagerLienTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.originInput">originInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.reasonInput">reasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.restrictionsInput">restrictionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.origin">origin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.restrictions">restrictions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.timeouts"></a>

```java
public GoogleResourceManagerLienTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference">GoogleResourceManagerLienTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.originInput"></a>

```java
public java.lang.String getOriginInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `reasonInput`<sup>Optional</sup> <a name="reasonInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.reasonInput"></a>

```java
public java.lang.String getReasonInput();
```

- *Type:* java.lang.String

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.restrictionsInput"></a>

```java
public java.util.List<java.lang.String> getRestrictionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.restrictions"></a>

```java
public java.util.List<java.lang.String> getRestrictions();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleResourceManagerLienConfig <a name="GoogleResourceManagerLienConfig" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_resource_manager_lien.GoogleResourceManagerLienConfig;

GoogleResourceManagerLienConfig.builder()
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
    .origin(java.lang.String)
    .parent(java.lang.String)
    .reason(java.lang.String)
    .restrictions(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(GoogleResourceManagerLienTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.origin">origin</a></code> | <code>java.lang.String</code> | A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | A reference to the resource this Lien is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.reason">reason</a></code> | <code>java.lang.String</code> | Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.restrictions">restrictions</a></code> | <code>java.util.List<java.lang.String></code> | The types of operations which should be blocked as a result of this Lien. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#id GoogleResourceManagerLien#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#origin GoogleResourceManagerLien#origin}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

A reference to the resource this Lien is attached to.

The server will validate the parent against those for which Liens are supported.
Since a variety of objects can have Liens against them, you must provide the type
prefix (e.g. "projects/my-project-name").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#parent GoogleResourceManagerLien#parent}

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#reason GoogleResourceManagerLien#reason}

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.restrictions"></a>

```java
public java.util.List<java.lang.String> getRestrictions();
```

- *Type:* java.util.List<java.lang.String>

The types of operations which should be blocked as a result of this Lien.

Each value should correspond to an IAM permission. The server will validate
the permissions against those for which Liens are supported.  An empty
list is meaningless and will be rejected.
e.g. ['resourcemanager.projects.delete']

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#restrictions GoogleResourceManagerLien#restrictions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#id GoogleResourceManagerLien#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.timeouts"></a>

```java
public GoogleResourceManagerLienTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#timeouts GoogleResourceManagerLien#timeouts}

---

### GoogleResourceManagerLienTimeouts <a name="GoogleResourceManagerLienTimeouts" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_resource_manager_lien.GoogleResourceManagerLienTimeouts;

GoogleResourceManagerLienTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#create GoogleResourceManagerLien#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#delete GoogleResourceManagerLien#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#create GoogleResourceManagerLien#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_resource_manager_lien#delete GoogleResourceManagerLien#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleResourceManagerLienTimeoutsOutputReference <a name="GoogleResourceManagerLienTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_resource_manager_lien.GoogleResourceManagerLienTimeoutsOutputReference;

new GoogleResourceManagerLienTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a>

---



