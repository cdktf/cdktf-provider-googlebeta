# `googleCertificateManagerCertificateIssuanceConfig` Submodule <a name="`googleCertificateManagerCertificateIssuanceConfig` Submodule" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCertificateManagerCertificateIssuanceConfig <a name="GoogleCertificateManagerCertificateIssuanceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config google_certificate_manager_certificate_issuance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer"></a>

```typescript
import { googleCertificateManagerCertificateIssuanceConfig } from '@cdktf/provider-google-beta'

new googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig(scope: Construct, id: string, config: GoogleCertificateManagerCertificateIssuanceConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig">GoogleCertificateManagerCertificateIssuanceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig">GoogleCertificateManagerCertificateIssuanceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.putCertificateAuthorityConfig">putCertificateAuthorityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertificateAuthorityConfig` <a name="putCertificateAuthorityConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.putCertificateAuthorityConfig"></a>

```typescript
public putCertificateAuthorityConfig(value: GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.putCertificateAuthorityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCertificateManagerCertificateIssuanceConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts">GoogleCertificateManagerCertificateIssuanceConfigTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCertificateManagerCertificateIssuanceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isConstruct"></a>

```typescript
import { googleCertificateManagerCertificateIssuanceConfig } from '@cdktf/provider-google-beta'

googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformElement"></a>

```typescript
import { googleCertificateManagerCertificateIssuanceConfig } from '@cdktf/provider-google-beta'

googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformResource"></a>

```typescript
import { googleCertificateManagerCertificateIssuanceConfig } from '@cdktf/provider-google-beta'

googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport"></a>

```typescript
import { googleCertificateManagerCertificateIssuanceConfig } from '@cdktf/provider-google-beta'

googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleCertificateManagerCertificateIssuanceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCertificateManagerCertificateIssuanceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCertificateManagerCertificateIssuanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCertificateManagerCertificateIssuanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfig">certificateAuthorityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference">GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfigInput">certificateAuthorityConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.lifetimeInput">lifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentageInput">rotationWindowPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts">GoogleCertificateManagerCertificateIssuanceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.lifetime">lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentage">rotationWindowPercentage</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateAuthorityConfig`<sup>Required</sup> <a name="certificateAuthorityConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfig"></a>

```typescript
public readonly certificateAuthorityConfig: GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference">GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `certificateAuthorityConfigInput`<sup>Optional</sup> <a name="certificateAuthorityConfigInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfigInput"></a>

```typescript
public readonly certificateAuthorityConfigInput: GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.keyAlgorithmInput"></a>

```typescript
public readonly keyAlgorithmInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rotationWindowPercentageInput`<sup>Optional</sup> <a name="rotationWindowPercentageInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentageInput"></a>

```typescript
public readonly rotationWindowPercentageInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCertificateManagerCertificateIssuanceConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts">GoogleCertificateManagerCertificateIssuanceConfigTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `rotationWindowPercentage`<sup>Required</sup> <a name="rotationWindowPercentage" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentage"></a>

```typescript
public readonly rotationWindowPercentage: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig <a name="GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig.Initializer"></a>

```typescript
import { googleCertificateManagerCertificateIssuanceConfig } from '@cdktf/provider-google-beta'

const googleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig: googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig.property.certificateAuthorityServiceConfig">certificateAuthorityServiceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a></code> | certificate_authority_service_config block. |

---

##### `certificateAuthorityServiceConfig`<sup>Optional</sup> <a name="certificateAuthorityServiceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig.property.certificateAuthorityServiceConfig"></a>

```typescript
public readonly certificateAuthorityServiceConfig: GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

certificate_authority_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#certificate_authority_service_config GoogleCertificateManagerCertificateIssuanceConfig#certificate_authority_service_config}

---

### GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig <a name="GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig.Initializer"></a>

```typescript
import { googleCertificateManagerCertificateIssuanceConfig } from '@cdktf/provider-google-beta'

const googleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig: googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig.property.caPool">caPool</a></code> | <code>string</code> | A CA pool resource used to issue a certificate. |

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig.property.caPool"></a>

```typescript
public readonly caPool: string;
```

- *Type:* string

A CA pool resource used to issue a certificate.

The CA pool string has a relative resource path following the form
"projects/{project}/locations/{location}/caPools/{caPool}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#ca_pool GoogleCertificateManagerCertificateIssuanceConfig#ca_pool}

---

### GoogleCertificateManagerCertificateIssuanceConfigConfig <a name="GoogleCertificateManagerCertificateIssuanceConfigConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.Initializer"></a>

```typescript
import { googleCertificateManagerCertificateIssuanceConfig } from '@cdktf/provider-google-beta'

const googleCertificateManagerCertificateIssuanceConfigConfig: googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.certificateAuthorityConfig">certificateAuthorityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | certificate_authority_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.lifetime">lifetime</a></code> | <code>string</code> | Lifetime of issued certificates. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.name">name</a></code> | <code>string</code> | A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.rotationWindowPercentage">rotationWindowPercentage</a></code> | <code>number</code> | It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.description">description</a></code> | <code>string</code> | One or more paragraphs of text description of a CertificateIssuanceConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#id GoogleCertificateManagerCertificateIssuanceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | 'Set of label tags associated with the CertificateIssuanceConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.location">location</a></code> | <code>string</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#project GoogleCertificateManagerCertificateIssuanceConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts">GoogleCertificateManagerCertificateIssuanceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateAuthorityConfig`<sup>Required</sup> <a name="certificateAuthorityConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.certificateAuthorityConfig"></a>

```typescript
public readonly certificateAuthorityConfig: GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

certificate_authority_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#certificate_authority_config GoogleCertificateManagerCertificateIssuanceConfig#certificate_authority_config}

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#key_algorithm GoogleCertificateManagerCertificateIssuanceConfig#key_algorithm}

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

Lifetime of issued certificates.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#lifetime GoogleCertificateManagerCertificateIssuanceConfig#lifetime}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#name GoogleCertificateManagerCertificateIssuanceConfig#name}

---

##### `rotationWindowPercentage`<sup>Required</sup> <a name="rotationWindowPercentage" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.rotationWindowPercentage"></a>

```typescript
public readonly rotationWindowPercentage: number;
```

- *Type:* number

It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate.

Must be a number between 1-99, inclusive.
You must set the rotation window percentage in relation to the certificate lifetime so that certificate renewal occurs at least 7 days after
the certificate has been issued and at least 7 days before it expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#rotation_window_percentage GoogleCertificateManagerCertificateIssuanceConfig#rotation_window_percentage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

One or more paragraphs of text description of a CertificateIssuanceConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#description GoogleCertificateManagerCertificateIssuanceConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#id GoogleCertificateManagerCertificateIssuanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

'Set of label tags associated with the CertificateIssuanceConfig resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#labels GoogleCertificateManagerCertificateIssuanceConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#location GoogleCertificateManagerCertificateIssuanceConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#project GoogleCertificateManagerCertificateIssuanceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCertificateManagerCertificateIssuanceConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts">GoogleCertificateManagerCertificateIssuanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#timeouts GoogleCertificateManagerCertificateIssuanceConfig#timeouts}

---

### GoogleCertificateManagerCertificateIssuanceConfigTimeouts <a name="GoogleCertificateManagerCertificateIssuanceConfigTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.Initializer"></a>

```typescript
import { googleCertificateManagerCertificateIssuanceConfig } from '@cdktf/provider-google-beta'

const googleCertificateManagerCertificateIssuanceConfigTimeouts: googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#create GoogleCertificateManagerCertificateIssuanceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#delete GoogleCertificateManagerCertificateIssuanceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#update GoogleCertificateManagerCertificateIssuanceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#create GoogleCertificateManagerCertificateIssuanceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#delete GoogleCertificateManagerCertificateIssuanceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_certificate_manager_certificate_issuance_config#update GoogleCertificateManagerCertificateIssuanceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference <a name="GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer"></a>

```typescript
import { googleCertificateManagerCertificateIssuanceConfig } from '@cdktf/provider-google-beta'

new googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPoolInput">caPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPool">caPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caPoolInput`<sup>Optional</sup> <a name="caPoolInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPoolInput"></a>

```typescript
public readonly caPoolInput: string;
```

- *Type:* string

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPool"></a>

```typescript
public readonly caPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

---


### GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference <a name="GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer"></a>

```typescript
import { googleCertificateManagerCertificateIssuanceConfig } from '@cdktf/provider-google-beta'

new googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.putCertificateAuthorityServiceConfig">putCertificateAuthorityServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resetCertificateAuthorityServiceConfig">resetCertificateAuthorityServiceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateAuthorityServiceConfig` <a name="putCertificateAuthorityServiceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.putCertificateAuthorityServiceConfig"></a>

```typescript
public putCertificateAuthorityServiceConfig(value: GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.putCertificateAuthorityServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

---

##### `resetCertificateAuthorityServiceConfig` <a name="resetCertificateAuthorityServiceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resetCertificateAuthorityServiceConfig"></a>

```typescript
public resetCertificateAuthorityServiceConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfig">certificateAuthorityServiceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfigInput">certificateAuthorityServiceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthorityServiceConfig`<sup>Required</sup> <a name="certificateAuthorityServiceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfig"></a>

```typescript
public readonly certificateAuthorityServiceConfig: GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference</a>

---

##### `certificateAuthorityServiceConfigInput`<sup>Optional</sup> <a name="certificateAuthorityServiceConfigInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfigInput"></a>

```typescript
public readonly certificateAuthorityServiceConfigInput: GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

---


### GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference <a name="GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCertificateManagerCertificateIssuanceConfig } from '@cdktf/provider-google-beta'

new googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts">GoogleCertificateManagerCertificateIssuanceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCertificateManagerCertificateIssuanceConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts">GoogleCertificateManagerCertificateIssuanceConfigTimeouts</a>

---



