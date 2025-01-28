# `googleDeveloperConnectConnection` Submodule <a name="`googleDeveloperConnectConnection` Submodule" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeveloperConnectConnection <a name="GoogleDeveloperConnectConnection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection google_developer_connect_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnection(scope: Construct, id: string, config: GoogleDeveloperConnectConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig">GoogleDeveloperConnectConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig">GoogleDeveloperConnectConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putCryptoKeyConfig">putCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubConfig">putGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubEnterpriseConfig">putGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabConfig">putGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabEnterpriseConfig">putGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetCryptoKeyConfig">resetCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubConfig">resetGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubEnterpriseConfig">resetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGitlabConfig">resetGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGitlabEnterpriseConfig">resetGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCryptoKeyConfig` <a name="putCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putCryptoKeyConfig"></a>

```typescript
public putCryptoKeyConfig(value: GoogleDeveloperConnectConnectionCryptoKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putCryptoKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a>

---

##### `putGithubConfig` <a name="putGithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubConfig"></a>

```typescript
public putGithubConfig(value: GoogleDeveloperConnectConnectionGithubConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

---

##### `putGithubEnterpriseConfig` <a name="putGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubEnterpriseConfig"></a>

```typescript
public putGithubEnterpriseConfig(value: GoogleDeveloperConnectConnectionGithubEnterpriseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGithubEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a>

---

##### `putGitlabConfig` <a name="putGitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabConfig"></a>

```typescript
public putGitlabConfig(value: GoogleDeveloperConnectConnectionGitlabConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a>

---

##### `putGitlabEnterpriseConfig` <a name="putGitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabEnterpriseConfig"></a>

```typescript
public putGitlabEnterpriseConfig(value: GoogleDeveloperConnectConnectionGitlabEnterpriseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putGitlabEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDeveloperConnectConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetCryptoKeyConfig` <a name="resetCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetCryptoKeyConfig"></a>

```typescript
public resetCryptoKeyConfig(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetGithubConfig` <a name="resetGithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubConfig"></a>

```typescript
public resetGithubConfig(): void
```

##### `resetGithubEnterpriseConfig` <a name="resetGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGithubEnterpriseConfig"></a>

```typescript
public resetGithubEnterpriseConfig(): void
```

##### `resetGitlabConfig` <a name="resetGitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGitlabConfig"></a>

```typescript
public resetGitlabConfig(): void
```

##### `resetGitlabEnterpriseConfig` <a name="resetGitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetGitlabEnterpriseConfig"></a>

```typescript
public resetGitlabEnterpriseConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDeveloperConnectConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDeveloperConnectConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDeveloperConnectConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDeveloperConnectConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDeveloperConnectConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cryptoKeyConfig">cryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference">GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfig">githubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference">GoogleDeveloperConnectConnectionGithubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference">GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabConfig">gitlabConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference">GoogleDeveloperConnectConnectionGitlabConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabEnterpriseConfig">gitlabEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.installationState">installationState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList">GoogleDeveloperConnectConnectionInstallationStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference">GoogleDeveloperConnectConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cryptoKeyConfigInput">cryptoKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfigInput">githubConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubEnterpriseConfigInput">githubEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabConfigInput">gitlabConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabEnterpriseConfigInput">gitlabEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `cryptoKeyConfig`<sup>Required</sup> <a name="cryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cryptoKeyConfig"></a>

```typescript
public readonly cryptoKeyConfig: GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference">GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference</a>

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `githubConfig`<sup>Required</sup> <a name="githubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfig"></a>

```typescript
public readonly githubConfig: GoogleDeveloperConnectConnectionGithubConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference">GoogleDeveloperConnectConnectionGithubConfigOutputReference</a>

---

##### `githubEnterpriseConfig`<sup>Required</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubEnterpriseConfig"></a>

```typescript
public readonly githubEnterpriseConfig: GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference">GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference</a>

---

##### `gitlabConfig`<sup>Required</sup> <a name="gitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabConfig"></a>

```typescript
public readonly gitlabConfig: GoogleDeveloperConnectConnectionGitlabConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference">GoogleDeveloperConnectConnectionGitlabConfigOutputReference</a>

---

##### `gitlabEnterpriseConfig`<sup>Required</sup> <a name="gitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabEnterpriseConfig"></a>

```typescript
public readonly gitlabEnterpriseConfig: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference</a>

---

##### `installationState`<sup>Required</sup> <a name="installationState" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.installationState"></a>

```typescript
public readonly installationState: GoogleDeveloperConnectConnectionInstallationStateList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList">GoogleDeveloperConnectConnectionInstallationStateList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDeveloperConnectConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference">GoogleDeveloperConnectConnectionTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `cryptoKeyConfigInput`<sup>Optional</sup> <a name="cryptoKeyConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.cryptoKeyConfigInput"></a>

```typescript
public readonly cryptoKeyConfigInput: GoogleDeveloperConnectConnectionCryptoKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `githubConfigInput`<sup>Optional</sup> <a name="githubConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubConfigInput"></a>

```typescript
public readonly githubConfigInput: GoogleDeveloperConnectConnectionGithubConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

---

##### `githubEnterpriseConfigInput`<sup>Optional</sup> <a name="githubEnterpriseConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.githubEnterpriseConfigInput"></a>

```typescript
public readonly githubEnterpriseConfigInput: GoogleDeveloperConnectConnectionGithubEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a>

---

##### `gitlabConfigInput`<sup>Optional</sup> <a name="gitlabConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabConfigInput"></a>

```typescript
public readonly gitlabConfigInput: GoogleDeveloperConnectConnectionGitlabConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a>

---

##### `gitlabEnterpriseConfigInput`<sup>Optional</sup> <a name="gitlabEnterpriseConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.gitlabEnterpriseConfigInput"></a>

```typescript
public readonly gitlabEnterpriseConfigInput: GoogleDeveloperConnectConnectionGitlabEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDeveloperConnectConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeveloperConnectConnectionConfig <a name="GoogleDeveloperConnectConnectionConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionConfig: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.cryptoKeyConfig">cryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.etag">etag</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubConfig">githubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a></code> | github_enterprise_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.gitlabConfig">gitlabConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a></code> | gitlab_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.gitlabEnterpriseConfig">gitlabEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | gitlab_enterprise_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#id GoogleDeveloperConnectConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#project GoogleDeveloperConnectConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#connection_id GoogleDeveloperConnectConnection#connection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#location GoogleDeveloperConnectConnection#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#annotations GoogleDeveloperConnectConnection#annotations}

---

##### `cryptoKeyConfig`<sup>Optional</sup> <a name="cryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.cryptoKeyConfig"></a>

```typescript
public readonly cryptoKeyConfig: GoogleDeveloperConnectConnectionCryptoKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#crypto_key_config GoogleDeveloperConnectConnection#crypto_key_config}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

If disabled is set to true, functionality is disabled for this connection.
Repository based API methods and webhooks processing for repositories in
this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#disabled GoogleDeveloperConnectConnection#disabled}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#etag GoogleDeveloperConnectConnection#etag}

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubConfig"></a>

```typescript
public readonly githubConfig: GoogleDeveloperConnectConnectionGithubConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#github_config GoogleDeveloperConnectConnection#github_config}

---

##### `githubEnterpriseConfig`<sup>Optional</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.githubEnterpriseConfig"></a>

```typescript
public readonly githubEnterpriseConfig: GoogleDeveloperConnectConnectionGithubEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a>

github_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#github_enterprise_config GoogleDeveloperConnectConnection#github_enterprise_config}

---

##### `gitlabConfig`<sup>Optional</sup> <a name="gitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.gitlabConfig"></a>

```typescript
public readonly gitlabConfig: GoogleDeveloperConnectConnectionGitlabConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a>

gitlab_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#gitlab_config GoogleDeveloperConnectConnection#gitlab_config}

---

##### `gitlabEnterpriseConfig`<sup>Optional</sup> <a name="gitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.gitlabEnterpriseConfig"></a>

```typescript
public readonly gitlabEnterpriseConfig: GoogleDeveloperConnectConnectionGitlabEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a>

gitlab_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#gitlab_enterprise_config GoogleDeveloperConnectConnection#gitlab_enterprise_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#id GoogleDeveloperConnectConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#labels GoogleDeveloperConnectConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#project GoogleDeveloperConnectConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDeveloperConnectConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#timeouts GoogleDeveloperConnectConnection#timeouts}

---

### GoogleDeveloperConnectConnectionCryptoKeyConfig <a name="GoogleDeveloperConnectConnectionCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionCryptoKeyConfig: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig.property.keyReference">keyReference</a></code> | <code>string</code> | Required. |

---

##### `keyReference`<sup>Required</sup> <a name="keyReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig.property.keyReference"></a>

```typescript
public readonly keyReference: string;
```

- *Type:* string

Required.

The name of the key which is used to encrypt/decrypt customer data. For key
in Cloud KMS, the key should be in the format of
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#key_reference GoogleDeveloperConnectConnection#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGithubConfig <a name="GoogleDeveloperConnectConnectionGithubConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionGithubConfig: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.githubApp">githubApp</a></code> | <code>string</code> | Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.appInstallationId">appInstallationId</a></code> | <code>string</code> | Optional. GitHub App installation id. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | authorizer_credential block. |

---

##### `githubApp`<sup>Required</sup> <a name="githubApp" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.githubApp"></a>

```typescript
public readonly githubApp: string;
```

- *Type:* string

Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. Possible values: GIT_HUB_APP_UNSPECIFIED DEVELOPER_CONNECT FIREBASE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#github_app GoogleDeveloperConnectConnection#github_app}

---

##### `appInstallationId`<sup>Optional</sup> <a name="appInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.appInstallationId"></a>

```typescript
public readonly appInstallationId: string;
```

- *Type:* string

Optional. GitHub App installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#app_installation_id GoogleDeveloperConnectConnection#app_installation_id}

---

##### `authorizerCredential`<sup>Optional</sup> <a name="authorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}

---

### GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionGithubConfigAuthorizerCredential: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion">oauthTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `oauthTokenSecretVersion`<sup>Required</sup> <a name="oauthTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion"></a>

```typescript
public readonly oauthTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#oauth_token_secret_version GoogleDeveloperConnectConnection#oauth_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGithubEnterpriseConfig <a name="GoogleDeveloperConnectConnectionGithubEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionGithubEnterpriseConfig: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.hostUri">hostUri</a></code> | <code>string</code> | Required. The URI of the GitHub Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.appId">appId</a></code> | <code>string</code> | Optional. ID of the GitHub App created from the manifest. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.appInstallationId">appInstallationId</a></code> | <code>string</code> | Optional. ID of the installation of the GitHub App. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.privateKeySecretVersion">privateKeySecretVersion</a></code> | <code>string</code> | Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.sslCaCertificate">sslCaCertificate</a></code> | <code>string</code> | Optional. SSL certificate to use for requests to GitHub Enterprise. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

Required. The URI of the GitHub Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#host_uri GoogleDeveloperConnectConnection#host_uri}

---

##### `appId`<sup>Optional</sup> <a name="appId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Optional. ID of the GitHub App created from the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#app_id GoogleDeveloperConnectConnection#app_id}

---

##### `appInstallationId`<sup>Optional</sup> <a name="appInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.appInstallationId"></a>

```typescript
public readonly appInstallationId: string;
```

- *Type:* string

Optional. ID of the installation of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#app_installation_id GoogleDeveloperConnectConnection#app_installation_id}

---

##### `privateKeySecretVersion`<sup>Optional</sup> <a name="privateKeySecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.privateKeySecretVersion"></a>

```typescript
public readonly privateKeySecretVersion: string;
```

- *Type:* string

Optional. SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#private_key_secret_version GoogleDeveloperConnectConnection#private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#service_directory_config GoogleDeveloperConnectConnection#service_directory_config}

---

##### `sslCaCertificate`<sup>Optional</sup> <a name="sslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: string;
```

- *Type:* string

Optional. SSL certificate to use for requests to GitHub Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#ssl_ca_certificate GoogleDeveloperConnectConnection#ssl_ca_certificate}

---

##### `webhookSecretSecretVersion`<sup>Optional</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig <a name="GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#service GoogleDeveloperConnectConnection#service}

---

### GoogleDeveloperConnectConnectionGitlabConfig <a name="GoogleDeveloperConnectConnectionGitlabConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionGitlabConfig: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | Required. |

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#read_authorizer_credential GoogleDeveloperConnectConnection#read_authorizer_credential}

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionGitlabConfigAuthorizerCredential: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabEnterpriseConfig <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionGitlabEnterpriseConfig: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.hostUri">hostUri</a></code> | <code>string</code> | Required. The URI of the GitLab Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.sslCaCertificate">sslCaCertificate</a></code> | <code>string</code> | Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance. |

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

Required. The URI of the GitLab Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#host_uri GoogleDeveloperConnectConnection#host_uri}

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#read_authorizer_credential GoogleDeveloperConnectConnection#read_authorizer_credential}

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

Required.

Immutable. SecretManager resource containing the webhook secret of a GitLab project,
formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#service_directory_config GoogleDeveloperConnectConnection#service_directory_config}

---

##### `sslCaCertificate`<sup>Optional</sup> <a name="sslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: string;
```

- *Type:* string

Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#ssl_ca_certificate GoogleDeveloperConnectConnection#ssl_ca_certificate}

---

### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#service GoogleDeveloperConnectConnection#service}

---

### GoogleDeveloperConnectConnectionInstallationState <a name="GoogleDeveloperConnectConnectionInstallationState" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionInstallationState: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState = { ... }
```


### GoogleDeveloperConnectConnectionTimeouts <a name="GoogleDeveloperConnectConnectionTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

const googleDeveloperConnectConnectionTimeouts: googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#create GoogleDeveloperConnectConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#delete GoogleDeveloperConnectConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#update GoogleDeveloperConnectConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#create GoogleDeveloperConnectConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#delete GoogleDeveloperConnectConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_developer_connect_connection#update GoogleDeveloperConnectConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference <a name="GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReferenceInput">keyReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReference">keyReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyReferenceInput`<sup>Optional</sup> <a name="keyReferenceInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```typescript
public readonly keyReferenceInput: string;
```

- *Type:* string

---

##### `keyReference`<sup>Required</sup> <a name="keyReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.keyReference"></a>

```typescript
public readonly keyReference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionCryptoKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionCryptoKeyConfig">GoogleDeveloperConnectConnectionCryptoKeyConfig</a>

---


### GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput">oauthTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion">oauthTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `oauthTokenSecretVersionInput`<sup>Optional</sup> <a name="oauthTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput"></a>

```typescript
public readonly oauthTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `oauthTokenSecretVersion`<sup>Required</sup> <a name="oauthTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion"></a>

```typescript
public readonly oauthTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGithubConfigOutputReference <a name="GoogleDeveloperConnectConnectionGithubConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId">resetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential">resetAuthorizerCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential"></a>

```typescript
public putAuthorizerCredential(value: GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `resetAppInstallationId` <a name="resetAppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAppInstallationId"></a>

```typescript
public resetAppInstallationId(): void
```

##### `resetAuthorizerCredential` <a name="resetAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.resetAuthorizerCredential"></a>

```typescript
public resetAuthorizerCredential(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.installationUri">installationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput">appInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput">githubAppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId">appInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubApp">githubApp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference</a>

---

##### `installationUri`<sup>Required</sup> <a name="installationUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.installationUri"></a>

```typescript
public readonly installationUri: string;
```

- *Type:* string

---

##### `appInstallationIdInput`<sup>Optional</sup> <a name="appInstallationIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationIdInput"></a>

```typescript
public readonly appInstallationIdInput: string;
```

- *Type:* string

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.authorizerCredentialInput"></a>

```typescript
public readonly authorizerCredentialInput: GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential</a>

---

##### `githubAppInput`<sup>Optional</sup> <a name="githubAppInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubAppInput"></a>

```typescript
public readonly githubAppInput: string;
```

- *Type:* string

---

##### `appInstallationId`<sup>Required</sup> <a name="appInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.appInstallationId"></a>

```typescript
public readonly appInstallationId: string;
```

- *Type:* string

---

##### `githubApp`<sup>Required</sup> <a name="githubApp" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.githubApp"></a>

```typescript
public readonly githubApp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionGithubConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubConfig">GoogleDeveloperConnectConnectionGithubConfig</a>

---


### GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference <a name="GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppId">resetAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId">resetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion">resetPrivateKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetSslCaCertificate">resetSslCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion">resetWebhookSecretSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `resetAppId` <a name="resetAppId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppId"></a>

```typescript
public resetAppId(): void
```

##### `resetAppInstallationId` <a name="resetAppInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId"></a>

```typescript
public resetAppInstallationId(): void
```

##### `resetPrivateKeySecretVersion` <a name="resetPrivateKeySecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion"></a>

```typescript
public resetPrivateKeySecretVersion(): void
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetSslCaCertificate` <a name="resetSslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetSslCaCertificate"></a>

```typescript
public resetSslCaCertificate(): void
```

##### `resetWebhookSecretSecretVersion` <a name="resetWebhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion"></a>

```typescript
public resetWebhookSecretSecretVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appSlug">appSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.installationUri">installationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serverVersion">serverVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput">appInstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput">hostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput">privateKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificateInput">sslCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId">appInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUri">hostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion">privateKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificate">sslCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appSlug`<sup>Required</sup> <a name="appSlug" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appSlug"></a>

```typescript
public readonly appSlug: string;
```

- *Type:* string

---

##### `installationUri`<sup>Required</sup> <a name="installationUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.installationUri"></a>

```typescript
public readonly installationUri: string;
```

- *Type:* string

---

##### `serverVersion`<sup>Required</sup> <a name="serverVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serverVersion"></a>

```typescript
public readonly serverVersion: string;
```

- *Type:* string

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `appInstallationIdInput`<sup>Optional</sup> <a name="appInstallationIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput"></a>

```typescript
public readonly appInstallationIdInput: string;
```

- *Type:* string

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput"></a>

```typescript
public readonly hostUriInput: string;
```

- *Type:* string

---

##### `privateKeySecretVersionInput`<sup>Optional</sup> <a name="privateKeySecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput"></a>

```typescript
public readonly privateKeySecretVersionInput: string;
```

- *Type:* string

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `sslCaCertificateInput`<sup>Optional</sup> <a name="sslCaCertificateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificateInput"></a>

```typescript
public readonly sslCaCertificateInput: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```typescript
public readonly webhookSecretSecretVersionInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appInstallationId`<sup>Required</sup> <a name="appInstallationId" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId"></a>

```typescript
public readonly appInstallationId: string;
```

- *Type:* string

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

---

##### `privateKeySecretVersion`<sup>Required</sup> <a name="privateKeySecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion"></a>

```typescript
public readonly privateKeySecretVersion: string;
```

- *Type:* string

---

##### `sslCaCertificate`<sup>Required</sup> <a name="sslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionGithubEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfig</a>

---


### GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference <a name="GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---


### GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGitlabConfigOutputReference <a name="GoogleDeveloperConnectConnectionGitlabConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential">putReadAuthorizerCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential"></a>

```typescript
public putAuthorizerCredential(value: GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---

##### `putReadAuthorizerCredential` <a name="putReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential"></a>

```typescript
public putReadAuthorizerCredential(value: GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput">readAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference</a>

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a>

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.authorizerCredentialInput"></a>

```typescript
public readonly authorizerCredentialInput: GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential</a>

---

##### `readAuthorizerCredentialInput`<sup>Optional</sup> <a name="readAuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```typescript
public readonly readAuthorizerCredentialInput: GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```typescript
public readonly webhookSecretSecretVersionInput: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionGitlabConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfig">GoogleDeveloperConnectConnectionGitlabConfig</a>

---


### GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential">putReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetSslCaCertificate">resetSslCaCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential"></a>

```typescript
public putAuthorizerCredential(value: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---

##### `putReadAuthorizerCredential` <a name="putReadAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential"></a>

```typescript
public putReadAuthorizerCredential(value: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetSslCaCertificate` <a name="resetSslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.resetSslCaCertificate"></a>

```typescript
public resetSslCaCertificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serverVersion">serverVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUriInput">hostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredentialInput">readAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificateInput">sslCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUri">hostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificate">sslCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference</a>

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference</a>

---

##### `serverVersion`<sup>Required</sup> <a name="serverVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serverVersion"></a>

```typescript
public readonly serverVersion: string;
```

- *Type:* string

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.authorizerCredentialInput"></a>

```typescript
public readonly authorizerCredentialInput: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential</a>

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUriInput"></a>

```typescript
public readonly hostUriInput: string;
```

- *Type:* string

---

##### `readAuthorizerCredentialInput`<sup>Optional</sup> <a name="readAuthorizerCredentialInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```typescript
public readonly readAuthorizerCredentialInput: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---

##### `sslCaCertificateInput`<sup>Optional</sup> <a name="sslCaCertificateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificateInput"></a>

```typescript
public readonly sslCaCertificateInput: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```typescript
public readonly webhookSecretSecretVersionInput: string;
```

- *Type:* string

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

---

##### `sslCaCertificate`<sup>Required</sup> <a name="sslCaCertificate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionGitlabEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfig</a>

---


### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential</a>

---


### GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference <a name="GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig">GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig</a>

---


### GoogleDeveloperConnectConnectionInstallationStateList <a name="GoogleDeveloperConnectConnectionInstallationStateList" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.get"></a>

```typescript
public get(index: number): GoogleDeveloperConnectConnectionInstallationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDeveloperConnectConnectionInstallationStateOutputReference <a name="GoogleDeveloperConnectConnectionInstallationStateOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.actionUri">actionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState">GoogleDeveloperConnectConnectionInstallationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionUri`<sup>Required</sup> <a name="actionUri" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.actionUri"></a>

```typescript
public readonly actionUri: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDeveloperConnectConnectionInstallationState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionInstallationState">GoogleDeveloperConnectConnectionInstallationState</a>

---


### GoogleDeveloperConnectConnectionTimeoutsOutputReference <a name="GoogleDeveloperConnectConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectConnection } from '@cdktf/provider-google-beta'

new googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDeveloperConnectConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectConnection.GoogleDeveloperConnectConnectionTimeouts">GoogleDeveloperConnectConnectionTimeouts</a>

---



