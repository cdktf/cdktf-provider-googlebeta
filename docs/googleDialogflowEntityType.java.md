# `googleDialogflowEntityType` Submodule <a name="`googleDialogflowEntityType` Submodule" id="@cdktf/provider-google-beta.googleDialogflowEntityType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowEntityType <a name="GoogleDialogflowEntityType" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type google_dialogflow_entity_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_entity_type.GoogleDialogflowEntityType;

GoogleDialogflowEntityType.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .kind(java.lang.String)
//  .enableFuzzyExtraction(java.lang.Boolean)
//  .enableFuzzyExtraction(IResolvable)
//  .entities(IResolvable)
//  .entities(java.util.List<GoogleDialogflowEntityTypeEntities>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDialogflowEntityTypeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of this entity type to be displayed on the console. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | Indicates the kind of entity type. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables fuzzy entity extraction during classification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.entities">entities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>></code> | entities block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#id GoogleDialogflowEntityType#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#project GoogleDialogflowEntityType#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The name of this entity type to be displayed on the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#display_name GoogleDialogflowEntityType#display_name}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

Indicates the kind of entity type.

* KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.
* KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity
  types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#kind GoogleDialogflowEntityType#kind}

---

##### `enableFuzzyExtraction`<sup>Optional</sup> <a name="enableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.enableFuzzyExtraction"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables fuzzy entity extraction during classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#enable_fuzzy_extraction GoogleDialogflowEntityType#enable_fuzzy_extraction}

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.entities"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>>

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#entities GoogleDialogflowEntityType#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#id GoogleDialogflowEntityType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#project GoogleDialogflowEntityType#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#timeouts GoogleDialogflowEntityType#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.putEntities">putEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetEnableFuzzyExtraction">resetEnableFuzzyExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetEntities">resetEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntities` <a name="putEntities" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.putEntities"></a>

```java
public void putEntities(IResolvable OR java.util.List<GoogleDialogflowEntityTypeEntities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.putEntities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowEntityTypeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a>

---

##### `resetEnableFuzzyExtraction` <a name="resetEnableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetEnableFuzzyExtraction"></a>

```java
public void resetEnableFuzzyExtraction()
```

##### `resetEntities` <a name="resetEntities" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetEntities"></a>

```java
public void resetEntities()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowEntityType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_entity_type.GoogleDialogflowEntityType;

GoogleDialogflowEntityType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_entity_type.GoogleDialogflowEntityType;

GoogleDialogflowEntityType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_entity_type.GoogleDialogflowEntityType;

GoogleDialogflowEntityType.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_entity_type.GoogleDialogflowEntityType;

GoogleDialogflowEntityType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowEntityType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDialogflowEntityType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowEntityType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowEntityType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowEntityType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.entities">entities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList">GoogleDialogflowEntityTypeEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference">GoogleDialogflowEntityTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.enableFuzzyExtractionInput">enableFuzzyExtractionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.entitiesInput">entitiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.entities"></a>

```java
public GoogleDialogflowEntityTypeEntitiesList getEntities();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList">GoogleDialogflowEntityTypeEntitiesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.timeouts"></a>

```java
public GoogleDialogflowEntityTypeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference">GoogleDialogflowEntityTypeTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enableFuzzyExtractionInput`<sup>Optional</sup> <a name="enableFuzzyExtractionInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.enableFuzzyExtractionInput"></a>

```java
public java.lang.Object getEnableFuzzyExtractionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.entitiesInput"></a>

```java
public java.lang.Object getEntitiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableFuzzyExtraction`<sup>Required</sup> <a name="enableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.enableFuzzyExtraction"></a>

```java
public java.lang.Object getEnableFuzzyExtraction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowEntityTypeConfig <a name="GoogleDialogflowEntityTypeConfig" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_entity_type.GoogleDialogflowEntityTypeConfig;

GoogleDialogflowEntityTypeConfig.builder()
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
    .displayName(java.lang.String)
    .kind(java.lang.String)
//  .enableFuzzyExtraction(java.lang.Boolean)
//  .enableFuzzyExtraction(IResolvable)
//  .entities(IResolvable)
//  .entities(java.util.List<GoogleDialogflowEntityTypeEntities>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDialogflowEntityTypeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of this entity type to be displayed on the console. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | Indicates the kind of entity type. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables fuzzy entity extraction during classification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.entities">entities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>></code> | entities block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#id GoogleDialogflowEntityType#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#project GoogleDialogflowEntityType#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name of this entity type to be displayed on the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#display_name GoogleDialogflowEntityType#display_name}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Indicates the kind of entity type.

* KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.
* KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity
  types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#kind GoogleDialogflowEntityType#kind}

---

##### `enableFuzzyExtraction`<sup>Optional</sup> <a name="enableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.enableFuzzyExtraction"></a>

```java
public java.lang.Object getEnableFuzzyExtraction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables fuzzy entity extraction during classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#enable_fuzzy_extraction GoogleDialogflowEntityType#enable_fuzzy_extraction}

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.entities"></a>

```java
public java.lang.Object getEntities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>>

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#entities GoogleDialogflowEntityType#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#id GoogleDialogflowEntityType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#project GoogleDialogflowEntityType#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.timeouts"></a>

```java
public GoogleDialogflowEntityTypeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#timeouts GoogleDialogflowEntityType#timeouts}

---

### GoogleDialogflowEntityTypeEntities <a name="GoogleDialogflowEntityTypeEntities" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_entity_type.GoogleDialogflowEntityTypeEntities;

GoogleDialogflowEntityTypeEntities.builder()
    .synonyms(java.util.List<java.lang.String>)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | A collection of value synonyms. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities.property.value">value</a></code> | <code>java.lang.String</code> | The primary value associated with this entity entry. |

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

A collection of value synonyms.

For example, if the entity type is vegetable, and value is scallions, a synonym
could be green onions.
For KIND_LIST entity types:

* This collection must contain exactly one synonym equal to value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#synonyms GoogleDialogflowEntityType#synonyms}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The primary value associated with this entity entry.

For example, if the entity type is vegetable, the value
could be scallions.
For KIND_MAP entity types:

* A reference value to be used in place of synonyms.
  For KIND_LIST entity types:
* A string that can contain references to other entity types (with or without aliases).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#value GoogleDialogflowEntityType#value}

---

### GoogleDialogflowEntityTypeTimeouts <a name="GoogleDialogflowEntityTypeTimeouts" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_entity_type.GoogleDialogflowEntityTypeTimeouts;

GoogleDialogflowEntityTypeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#create GoogleDialogflowEntityType#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#delete GoogleDialogflowEntityType#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#update GoogleDialogflowEntityType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#create GoogleDialogflowEntityType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#delete GoogleDialogflowEntityType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_entity_type#update GoogleDialogflowEntityType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowEntityTypeEntitiesList <a name="GoogleDialogflowEntityTypeEntitiesList" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_entity_type.GoogleDialogflowEntityTypeEntitiesList;

new GoogleDialogflowEntityTypeEntitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.get"></a>

```java
public GoogleDialogflowEntityTypeEntitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>>

---


### GoogleDialogflowEntityTypeEntitiesOutputReference <a name="GoogleDialogflowEntityTypeEntitiesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_entity_type.GoogleDialogflowEntityTypeEntitiesOutputReference;

new GoogleDialogflowEntityTypeEntitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.synonymsInput"></a>

```java
public java.util.List<java.lang.String> getSynonymsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>

---


### GoogleDialogflowEntityTypeTimeoutsOutputReference <a name="GoogleDialogflowEntityTypeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_entity_type.GoogleDialogflowEntityTypeTimeoutsOutputReference;

new GoogleDialogflowEntityTypeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a>

---



