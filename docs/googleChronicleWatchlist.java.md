# `googleChronicleWatchlist` Submodule <a name="`googleChronicleWatchlist` Submodule" id="@cdktf/provider-google-beta.googleChronicleWatchlist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleWatchlist <a name="GoogleChronicleWatchlist" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist google_chronicle_watchlist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlist;

GoogleChronicleWatchlist.Builder.create(Construct scope, java.lang.String id)
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
    .entityPopulationMechanism(GoogleChronicleWatchlistEntityPopulationMechanism)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .multiplyingFactor(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleChronicleWatchlistTimeouts)
//  .watchlistId(java.lang.String)
//  .watchlistUserPreferences(GoogleChronicleWatchlistWatchlistUserPreferences)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148). |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.entityPopulationMechanism">entityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | entity_population_mechanism block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the watchlist. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#id GoogleChronicleWatchlist#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.multiplyingFactor">multiplyingFactor</a></code> | <code>java.lang.Number</code> | Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#project GoogleChronicleWatchlist#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.watchlistId">watchlistId</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.watchlistUserPreferences">watchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | watchlist_user_preferences block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#display_name GoogleChronicleWatchlist#display_name}

---

##### `entityPopulationMechanism`<sup>Required</sup> <a name="entityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.entityPopulationMechanism"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

entity_population_mechanism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#entity_population_mechanism GoogleChronicleWatchlist#entity_population_mechanism}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#instance GoogleChronicleWatchlist#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#location GoogleChronicleWatchlist#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. Description of the watchlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#description GoogleChronicleWatchlist#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#id GoogleChronicleWatchlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiplyingFactor`<sup>Optional</sup> <a name="multiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.multiplyingFactor"></a>

- *Type:* java.lang.Number

Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#multiplying_factor GoogleChronicleWatchlist#multiplying_factor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#project GoogleChronicleWatchlist#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#timeouts GoogleChronicleWatchlist#timeouts}

---

##### `watchlistId`<sup>Optional</sup> <a name="watchlistId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.watchlistId"></a>

- *Type:* java.lang.String

Optional.

The ID to use for the watchlist,
which will become the final component of the watchlist's resource name.
This value should be 4-63 characters, and valid characters
are /a-z-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#watchlist_id GoogleChronicleWatchlist#watchlist_id}

---

##### `watchlistUserPreferences`<sup>Optional</sup> <a name="watchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.watchlistUserPreferences"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

watchlist_user_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#watchlist_user_preferences GoogleChronicleWatchlist#watchlist_user_preferences}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putEntityPopulationMechanism">putEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putWatchlistUserPreferences">putWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetMultiplyingFactor">resetMultiplyingFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistId">resetWatchlistId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistUserPreferences">resetWatchlistUserPreferences</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntityPopulationMechanism` <a name="putEntityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putEntityPopulationMechanism"></a>

```java
public void putEntityPopulationMechanism(GoogleChronicleWatchlistEntityPopulationMechanism value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putEntityPopulationMechanism.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putTimeouts"></a>

```java
public void putTimeouts(GoogleChronicleWatchlistTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

---

##### `putWatchlistUserPreferences` <a name="putWatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putWatchlistUserPreferences"></a>

```java
public void putWatchlistUserPreferences(GoogleChronicleWatchlistWatchlistUserPreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putWatchlistUserPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetId"></a>

```java
public void resetId()
```

##### `resetMultiplyingFactor` <a name="resetMultiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetMultiplyingFactor"></a>

```java
public void resetMultiplyingFactor()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWatchlistId` <a name="resetWatchlistId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistId"></a>

```java
public void resetWatchlistId()
```

##### `resetWatchlistUserPreferences` <a name="resetWatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistUserPreferences"></a>

```java
public void resetWatchlistUserPreferences()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleChronicleWatchlist resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlist;

GoogleChronicleWatchlist.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlist;

GoogleChronicleWatchlist.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlist;

GoogleChronicleWatchlist.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlist;

GoogleChronicleWatchlist.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleChronicleWatchlist.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleChronicleWatchlist resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleChronicleWatchlist to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleChronicleWatchlist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleWatchlist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityCount">entityCount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList">GoogleChronicleWatchlistEntityCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanism">entityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference">GoogleChronicleWatchlistTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferences">watchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference">GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanismInput">entityPopulationMechanismInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactorInput">multiplyingFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistIdInput">watchlistIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferencesInput">watchlistUserPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactor">multiplyingFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistId">watchlistId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `entityCount`<sup>Required</sup> <a name="entityCount" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityCount"></a>

```java
public GoogleChronicleWatchlistEntityCountList getEntityCount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList">GoogleChronicleWatchlistEntityCountList</a>

---

##### `entityPopulationMechanism`<sup>Required</sup> <a name="entityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanism"></a>

```java
public GoogleChronicleWatchlistEntityPopulationMechanismOutputReference getEntityPopulationMechanism();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeouts"></a>

```java
public GoogleChronicleWatchlistTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference">GoogleChronicleWatchlistTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `watchlistUserPreferences`<sup>Required</sup> <a name="watchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferences"></a>

```java
public GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference getWatchlistUserPreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference">GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `entityPopulationMechanismInput`<sup>Optional</sup> <a name="entityPopulationMechanismInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanismInput"></a>

```java
public GoogleChronicleWatchlistEntityPopulationMechanism getEntityPopulationMechanismInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `multiplyingFactorInput`<sup>Optional</sup> <a name="multiplyingFactorInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactorInput"></a>

```java
public java.lang.Number getMultiplyingFactorInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

---

##### `watchlistIdInput`<sup>Optional</sup> <a name="watchlistIdInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistIdInput"></a>

```java
public java.lang.String getWatchlistIdInput();
```

- *Type:* java.lang.String

---

##### `watchlistUserPreferencesInput`<sup>Optional</sup> <a name="watchlistUserPreferencesInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferencesInput"></a>

```java
public GoogleChronicleWatchlistWatchlistUserPreferences getWatchlistUserPreferencesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `multiplyingFactor`<sup>Required</sup> <a name="multiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactor"></a>

```java
public java.lang.Number getMultiplyingFactor();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `watchlistId`<sup>Required</sup> <a name="watchlistId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistId"></a>

```java
public java.lang.String getWatchlistId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleWatchlistConfig <a name="GoogleChronicleWatchlistConfig" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlistConfig;

GoogleChronicleWatchlistConfig.builder()
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
    .entityPopulationMechanism(GoogleChronicleWatchlistEntityPopulationMechanism)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .multiplyingFactor(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleChronicleWatchlistTimeouts)
//  .watchlistId(java.lang.String)
//  .watchlistUserPreferences(GoogleChronicleWatchlistWatchlistUserPreferences)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148). |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.entityPopulationMechanism">entityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | entity_population_mechanism block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the watchlist. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#id GoogleChronicleWatchlist#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.multiplyingFactor">multiplyingFactor</a></code> | <code>java.lang.Number</code> | Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#project GoogleChronicleWatchlist#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistId">watchlistId</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistUserPreferences">watchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | watchlist_user_preferences block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#display_name GoogleChronicleWatchlist#display_name}

---

##### `entityPopulationMechanism`<sup>Required</sup> <a name="entityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.entityPopulationMechanism"></a>

```java
public GoogleChronicleWatchlistEntityPopulationMechanism getEntityPopulationMechanism();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

entity_population_mechanism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#entity_population_mechanism GoogleChronicleWatchlist#entity_population_mechanism}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#instance GoogleChronicleWatchlist#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#location GoogleChronicleWatchlist#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. Description of the watchlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#description GoogleChronicleWatchlist#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#id GoogleChronicleWatchlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiplyingFactor`<sup>Optional</sup> <a name="multiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.multiplyingFactor"></a>

```java
public java.lang.Number getMultiplyingFactor();
```

- *Type:* java.lang.Number

Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#multiplying_factor GoogleChronicleWatchlist#multiplying_factor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#project GoogleChronicleWatchlist#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.timeouts"></a>

```java
public GoogleChronicleWatchlistTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#timeouts GoogleChronicleWatchlist#timeouts}

---

##### `watchlistId`<sup>Optional</sup> <a name="watchlistId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistId"></a>

```java
public java.lang.String getWatchlistId();
```

- *Type:* java.lang.String

Optional.

The ID to use for the watchlist,
which will become the final component of the watchlist's resource name.
This value should be 4-63 characters, and valid characters
are /a-z-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#watchlist_id GoogleChronicleWatchlist#watchlist_id}

---

##### `watchlistUserPreferences`<sup>Optional</sup> <a name="watchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistUserPreferences"></a>

```java
public GoogleChronicleWatchlistWatchlistUserPreferences getWatchlistUserPreferences();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

watchlist_user_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#watchlist_user_preferences GoogleChronicleWatchlist#watchlist_user_preferences}

---

### GoogleChronicleWatchlistEntityCount <a name="GoogleChronicleWatchlistEntityCount" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlistEntityCount;

GoogleChronicleWatchlistEntityCount.builder()
    .build();
```


### GoogleChronicleWatchlistEntityPopulationMechanism <a name="GoogleChronicleWatchlistEntityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlistEntityPopulationMechanism;

GoogleChronicleWatchlistEntityPopulationMechanism.builder()
//  .manual(GoogleChronicleWatchlistEntityPopulationMechanismManual)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism.property.manual">manual</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a></code> | manual block. |

---

##### `manual`<sup>Optional</sup> <a name="manual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism.property.manual"></a>

```java
public GoogleChronicleWatchlistEntityPopulationMechanismManual getManual();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#manual GoogleChronicleWatchlist#manual}

---

### GoogleChronicleWatchlistEntityPopulationMechanismManual <a name="GoogleChronicleWatchlistEntityPopulationMechanismManual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual;

GoogleChronicleWatchlistEntityPopulationMechanismManual.builder()
    .build();
```


### GoogleChronicleWatchlistTimeouts <a name="GoogleChronicleWatchlistTimeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlistTimeouts;

GoogleChronicleWatchlistTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#create GoogleChronicleWatchlist#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#delete GoogleChronicleWatchlist#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#update GoogleChronicleWatchlist#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#create GoogleChronicleWatchlist#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#delete GoogleChronicleWatchlist#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#update GoogleChronicleWatchlist#update}.

---

### GoogleChronicleWatchlistWatchlistUserPreferences <a name="GoogleChronicleWatchlistWatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlistWatchlistUserPreferences;

GoogleChronicleWatchlistWatchlistUserPreferences.builder()
//  .pinned(java.lang.Boolean)
//  .pinned(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences.property.pinned">pinned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Whether the watchlist is pinned on the dashboard. |

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences.property.pinned"></a>

```java
public java.lang.Object getPinned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Whether the watchlist is pinned on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_chronicle_watchlist#pinned GoogleChronicleWatchlist#pinned}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleWatchlistEntityCountList <a name="GoogleChronicleWatchlistEntityCountList" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlistEntityCountList;

new GoogleChronicleWatchlistEntityCountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.get"></a>

```java
public GoogleChronicleWatchlistEntityCountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleChronicleWatchlistEntityCountOutputReference <a name="GoogleChronicleWatchlistEntityCountOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlistEntityCountOutputReference;

new GoogleChronicleWatchlistEntityCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.asset">asset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.user">user</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount">GoogleChronicleWatchlistEntityCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `asset`<sup>Required</sup> <a name="asset" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.asset"></a>

```java
public java.lang.Number getAsset();
```

- *Type:* java.lang.Number

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.user"></a>

```java
public java.lang.Number getUser();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.internalValue"></a>

```java
public GoogleChronicleWatchlistEntityCount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount">GoogleChronicleWatchlistEntityCount</a>

---


### GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference <a name="GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference;

new GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue"></a>

```java
public GoogleChronicleWatchlistEntityPopulationMechanismManual getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

---


### GoogleChronicleWatchlistEntityPopulationMechanismOutputReference <a name="GoogleChronicleWatchlistEntityPopulationMechanismOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference;

new GoogleChronicleWatchlistEntityPopulationMechanismOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.putManual">putManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual">resetManual</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManual` <a name="putManual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.putManual"></a>

```java
public void putManual(GoogleChronicleWatchlistEntityPopulationMechanismManual value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.putManual.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `resetManual` <a name="resetManual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual"></a>

```java
public void resetManual()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual">manual</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput">manualInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manual`<sup>Required</sup> <a name="manual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual"></a>

```java
public GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference getManual();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference</a>

---

##### `manualInput`<sup>Optional</sup> <a name="manualInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput"></a>

```java
public GoogleChronicleWatchlistEntityPopulationMechanismManual getManualInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue"></a>

```java
public GoogleChronicleWatchlistEntityPopulationMechanism getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

---


### GoogleChronicleWatchlistTimeoutsOutputReference <a name="GoogleChronicleWatchlistTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlistTimeoutsOutputReference;

new GoogleChronicleWatchlistTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

---


### GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference <a name="GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_chronicle_watchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference;

new GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned">resetPinned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPinned` <a name="resetPinned" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned"></a>

```java
public void resetPinned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput">pinnedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned">pinned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pinnedInput`<sup>Optional</sup> <a name="pinnedInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput"></a>

```java
public java.lang.Object getPinnedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned"></a>

```java
public java.lang.Object getPinned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue"></a>

```java
public GoogleChronicleWatchlistWatchlistUserPreferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

---



