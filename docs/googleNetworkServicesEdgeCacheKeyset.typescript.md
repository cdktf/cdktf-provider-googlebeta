# `googleNetworkServicesEdgeCacheKeyset` Submodule <a name="`googleNetworkServicesEdgeCacheKeyset` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesEdgeCacheKeyset <a name="GoogleNetworkServicesEdgeCacheKeyset" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset google_network_services_edge_cache_keyset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset(scope: Construct, id: string, config: GoogleNetworkServicesEdgeCacheKeysetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig">GoogleNetworkServicesEdgeCacheKeysetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig">GoogleNetworkServicesEdgeCacheKeysetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putPublicKey">putPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putValidationSharedKeys">putValidationSharedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetValidationSharedKeys">resetValidationSharedKeys</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPublicKey` <a name="putPublicKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putPublicKey"></a>

```typescript
public putPublicKey(value: IResolvable | GoogleNetworkServicesEdgeCacheKeysetPublicKey[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putPublicKey.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesEdgeCacheKeysetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a>

---

##### `putValidationSharedKeys` <a name="putValidationSharedKeys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putValidationSharedKeys"></a>

```typescript
public putValidationSharedKeys(value: IResolvable | GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putValidationSharedKeys.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetPublicKey"></a>

```typescript
public resetPublicKey(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidationSharedKeys` <a name="resetValidationSharedKeys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetValidationSharedKeys"></a>

```typescript
public resetValidationSharedKeys(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheKeyset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isConstruct"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformElement"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformResource"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheKeyset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesEdgeCacheKeyset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesEdgeCacheKeyset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesEdgeCacheKeyset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.publicKey">publicKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList">GoogleNetworkServicesEdgeCacheKeysetPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference">GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.validationSharedKeys">validationSharedKeys</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.publicKeyInput">publicKeyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.validationSharedKeysInput">validationSharedKeysInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.publicKey"></a>

```typescript
public readonly publicKey: GoogleNetworkServicesEdgeCacheKeysetPublicKeyList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList">GoogleNetworkServicesEdgeCacheKeysetPublicKeyList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference">GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference</a>

---

##### `validationSharedKeys`<sup>Required</sup> <a name="validationSharedKeys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.validationSharedKeys"></a>

```typescript
public readonly validationSharedKeys: GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: IResolvable | GoogleNetworkServicesEdgeCacheKeysetPublicKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesEdgeCacheKeysetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a>

---

##### `validationSharedKeysInput`<sup>Optional</sup> <a name="validationSharedKeysInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.validationSharedKeysInput"></a>

```typescript
public readonly validationSharedKeysInput: IResolvable | GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesEdgeCacheKeysetConfig <a name="GoogleNetworkServicesEdgeCacheKeysetConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheKeysetConfig: googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#id GoogleNetworkServicesEdgeCacheKeyset#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#project GoogleNetworkServicesEdgeCacheKeyset#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.publicKey">publicKey</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>[]</code> | public_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.validationSharedKeys">validationSharedKeys</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]</code> | validation_shared_keys block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#name GoogleNetworkServicesEdgeCacheKeyset#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#description GoogleNetworkServicesEdgeCacheKeyset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#id GoogleNetworkServicesEdgeCacheKeyset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the EdgeCache resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#labels GoogleNetworkServicesEdgeCacheKeyset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#project GoogleNetworkServicesEdgeCacheKeyset#project}.

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.publicKey"></a>

```typescript
public readonly publicKey: IResolvable | GoogleNetworkServicesEdgeCacheKeysetPublicKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>[]

public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#public_key GoogleNetworkServicesEdgeCacheKeyset#public_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesEdgeCacheKeysetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#timeouts GoogleNetworkServicesEdgeCacheKeyset#timeouts}

---

##### `validationSharedKeys`<sup>Optional</sup> <a name="validationSharedKeys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.validationSharedKeys"></a>

```typescript
public readonly validationSharedKeys: IResolvable | GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]

validation_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#validation_shared_keys GoogleNetworkServicesEdgeCacheKeyset#validation_shared_keys}

---

### GoogleNetworkServicesEdgeCacheKeysetPublicKey <a name="GoogleNetworkServicesEdgeCacheKeysetPublicKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheKeysetPublicKey: googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.id">id</a></code> | <code>string</code> | The ID of the public key. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to have the CDN automatically manage this public key value. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.value">value</a></code> | <code>string</code> | The base64-encoded value of the Ed25519 public key. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the public key.

The ID must be 1-63 characters long, and comply with RFC1035.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]*
which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#id GoogleNetworkServicesEdgeCacheKeyset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to have the CDN automatically manage this public key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#managed GoogleNetworkServicesEdgeCacheKeyset#managed}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The base64-encoded value of the Ed25519 public key.

The base64 encoding can be padded (44 bytes) or unpadded (43 bytes).
Representations or encodings of the public key other than this will be rejected with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#value GoogleNetworkServicesEdgeCacheKeyset#value}

---

### GoogleNetworkServicesEdgeCacheKeysetTimeouts <a name="GoogleNetworkServicesEdgeCacheKeysetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheKeysetTimeouts: googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#create GoogleNetworkServicesEdgeCacheKeyset#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#delete GoogleNetworkServicesEdgeCacheKeyset#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#update GoogleNetworkServicesEdgeCacheKeyset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#create GoogleNetworkServicesEdgeCacheKeyset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#delete GoogleNetworkServicesEdgeCacheKeyset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#update GoogleNetworkServicesEdgeCacheKeyset#update}.

---

### GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys <a name="GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheKeysetValidationSharedKeys: googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys.property.secretVersion">secretVersion</a></code> | <code>string</code> | The name of the secret version in Secret Manager. |

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

The name of the secret version in Secret Manager.

The resource name of the secret version must be in the format 'projects/* /secrets/* /versions/*' where the '*' values are replaced by the secrets themselves.
The secrets must be at least 16 bytes large.  The recommended secret size depends on the signature algorithm you are using.
* If you are using HMAC-SHA1, we suggest 20-byte secrets.
* If you are using HMAC-SHA256, we suggest 32-byte secrets.
See RFC 2104, Section 3 for more details on these recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_edge_cache_keyset#secret_version GoogleNetworkServicesEdgeCacheKeyset#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesEdgeCacheKeysetPublicKeyList <a name="GoogleNetworkServicesEdgeCacheKeysetPublicKeyList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheKeysetPublicKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>[]

---


### GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference <a name="GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetManaged"></a>

```typescript
public resetManaged(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managedInput">managedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managedInput"></a>

```typescript
public readonly managedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheKeysetPublicKey;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>

---


### GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference <a name="GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheKeysetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a>

---


### GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList <a name="GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]

---


### GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference <a name="GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheKeyset } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>

---



