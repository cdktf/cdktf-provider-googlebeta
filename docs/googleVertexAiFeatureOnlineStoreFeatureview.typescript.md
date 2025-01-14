# `googleVertexAiFeatureOnlineStoreFeatureview` Submodule <a name="`googleVertexAiFeatureOnlineStoreFeatureview` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeatureOnlineStoreFeatureview <a name="GoogleVertexAiFeatureOnlineStoreFeatureview" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview google_vertex_ai_feature_online_store_featureview}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

new googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview(scope: Construct, id: string, config: GoogleVertexAiFeatureOnlineStoreFeatureviewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putBigQuerySource">putBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource">putFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putSyncConfig">putSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putVectorSearchConfig">putVectorSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetBigQuerySource">resetBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetFeatureRegistrySource">resetFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetSyncConfig">resetSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetVectorSearchConfig">resetVectorSearchConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigQuerySource` <a name="putBigQuerySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putBigQuerySource"></a>

```typescript
public putBigQuerySource(value: GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putBigQuerySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---

##### `putFeatureRegistrySource` <a name="putFeatureRegistrySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource"></a>

```typescript
public putFeatureRegistrySource(value: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---

##### `putSyncConfig` <a name="putSyncConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putSyncConfig"></a>

```typescript
public putSyncConfig(value: GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

---

##### `putVectorSearchConfig` <a name="putVectorSearchConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putVectorSearchConfig"></a>

```typescript
public putVectorSearchConfig(value: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putVectorSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a>

---

##### `resetBigQuerySource` <a name="resetBigQuerySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetBigQuerySource"></a>

```typescript
public resetBigQuerySource(): void
```

##### `resetFeatureRegistrySource` <a name="resetFeatureRegistrySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetFeatureRegistrySource"></a>

```typescript
public resetFeatureRegistrySource(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSyncConfig` <a name="resetSyncConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetSyncConfig"></a>

```typescript
public resetSyncConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVectorSearchConfig` <a name="resetVectorSearchConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetVectorSearchConfig"></a>

```typescript
public resetVectorSearchConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreFeatureview resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isConstruct"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformElement"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformResource"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreFeatureview resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiFeatureOnlineStoreFeatureview to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiFeatureOnlineStoreFeatureview that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeatureOnlineStoreFeatureview to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.bigQuerySource">bigQuerySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySource">featureRegistrySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.vectorSearchConfig">vectorSearchConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.bigQuerySourceInput">bigQuerySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStoreInput">featureOnlineStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySourceInput">featureRegistrySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.syncConfigInput">syncConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.vectorSearchConfigInput">vectorSearchConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStore">featureOnlineStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bigQuerySource`<sup>Required</sup> <a name="bigQuerySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.bigQuerySource"></a>

```typescript
public readonly bigQuerySource: GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `featureRegistrySource`<sup>Required</sup> <a name="featureRegistrySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySource"></a>

```typescript
public readonly featureRegistrySource: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference</a>

---

##### `syncConfig`<sup>Required</sup> <a name="syncConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.syncConfig"></a>

```typescript
public readonly syncConfig: GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `vectorSearchConfig`<sup>Required</sup> <a name="vectorSearchConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.vectorSearchConfig"></a>

```typescript
public readonly vectorSearchConfig: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference</a>

---

##### `bigQuerySourceInput`<sup>Optional</sup> <a name="bigQuerySourceInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.bigQuerySourceInput"></a>

```typescript
public readonly bigQuerySourceInput: GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---

##### `featureOnlineStoreInput`<sup>Optional</sup> <a name="featureOnlineStoreInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStoreInput"></a>

```typescript
public readonly featureOnlineStoreInput: string;
```

- *Type:* string

---

##### `featureRegistrySourceInput`<sup>Optional</sup> <a name="featureRegistrySourceInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySourceInput"></a>

```typescript
public readonly featureRegistrySourceInput: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `syncConfigInput`<sup>Optional</sup> <a name="syncConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.syncConfigInput"></a>

```typescript
public readonly syncConfigInput: GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

---

##### `vectorSearchConfigInput`<sup>Optional</sup> <a name="vectorSearchConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.vectorSearchConfigInput"></a>

```typescript
public readonly vectorSearchConfigInput: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a>

---

##### `featureOnlineStore`<sup>Required</sup> <a name="featureOnlineStore" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStore"></a>

```typescript
public readonly featureOnlineStore: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

const googleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource: googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.entityIdColumns">entityIdColumns</a></code> | <code>string[]</code> | Columns to construct entityId / row keys. Start by supporting 1 only. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.uri">uri</a></code> | <code>string</code> | The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig. |

---

##### `entityIdColumns`<sup>Required</sup> <a name="entityIdColumns" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.entityIdColumns"></a>

```typescript
public readonly entityIdColumns: string[];
```

- *Type:* string[]

Columns to construct entityId / row keys. Start by supporting 1 only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#entity_id_columns GoogleVertexAiFeatureOnlineStoreFeatureview#entity_id_columns}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#uri GoogleVertexAiFeatureOnlineStoreFeatureview#uri}

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewConfig <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

const googleVertexAiFeatureOnlineStoreFeatureviewConfig: googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.featureOnlineStore">featureOnlineStore</a></code> | <code>string</code> | The name of the FeatureOnlineStore to use for the featureview. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.region">region</a></code> | <code>string</code> | The region for the resource. It should be the same as the featureonlinestore region. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.bigQuerySource">bigQuerySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | big_query_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.featureRegistrySource">featureRegistrySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | feature_registry_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#id GoogleVertexAiFeatureOnlineStoreFeatureview#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to this FeatureView. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.name">name</a></code> | <code>string</code> | Name of the FeatureView. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#project GoogleVertexAiFeatureOnlineStoreFeatureview#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | sync_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.vectorSearchConfig">vectorSearchConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a></code> | vector_search_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `featureOnlineStore`<sup>Required</sup> <a name="featureOnlineStore" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.featureOnlineStore"></a>

```typescript
public readonly featureOnlineStore: string;
```

- *Type:* string

The name of the FeatureOnlineStore to use for the featureview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_online_store GoogleVertexAiFeatureOnlineStoreFeatureview#feature_online_store}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region for the resource. It should be the same as the featureonlinestore region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#region GoogleVertexAiFeatureOnlineStoreFeatureview#region}

---

##### `bigQuerySource`<sup>Optional</sup> <a name="bigQuerySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.bigQuerySource"></a>

```typescript
public readonly bigQuerySource: GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

big_query_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#big_query_source GoogleVertexAiFeatureOnlineStoreFeatureview#big_query_source}

---

##### `featureRegistrySource`<sup>Optional</sup> <a name="featureRegistrySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.featureRegistrySource"></a>

```typescript
public readonly featureRegistrySource: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

feature_registry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_registry_source GoogleVertexAiFeatureOnlineStoreFeatureview#feature_registry_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#id GoogleVertexAiFeatureOnlineStoreFeatureview#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to this FeatureView.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#labels GoogleVertexAiFeatureOnlineStoreFeatureview#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the FeatureView.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#name GoogleVertexAiFeatureOnlineStoreFeatureview#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#project GoogleVertexAiFeatureOnlineStoreFeatureview#project}.

---

##### `syncConfig`<sup>Optional</sup> <a name="syncConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.syncConfig"></a>

```typescript
public readonly syncConfig: GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#sync_config GoogleVertexAiFeatureOnlineStoreFeatureview#sync_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#timeouts GoogleVertexAiFeatureOnlineStoreFeatureview#timeouts}

---

##### `vectorSearchConfig`<sup>Optional</sup> <a name="vectorSearchConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.vectorSearchConfig"></a>

```typescript
public readonly vectorSearchConfig: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a>

vector_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#vector_search_config GoogleVertexAiFeatureOnlineStoreFeatureview#vector_search_config}

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

const googleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource: googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.featureGroups">featureGroups</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]</code> | feature_groups block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.projectNumber">projectNumber</a></code> | <code>string</code> | The project number of the parent project of the feature Groups. |

---

##### `featureGroups`<sup>Required</sup> <a name="featureGroups" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.featureGroups"></a>

```typescript
public readonly featureGroups: IResolvable | GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]

feature_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_groups GoogleVertexAiFeatureOnlineStoreFeatureview#feature_groups}

---

##### `projectNumber`<sup>Optional</sup> <a name="projectNumber" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.projectNumber"></a>

```typescript
public readonly projectNumber: string;
```

- *Type:* string

The project number of the parent project of the feature Groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#project_number GoogleVertexAiFeatureOnlineStoreFeatureview#project_number}

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

const googleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups: googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureGroupId">featureGroupId</a></code> | <code>string</code> | Identifier of the feature group. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureIds">featureIds</a></code> | <code>string[]</code> | Identifiers of features under the feature group. |

---

##### `featureGroupId`<sup>Required</sup> <a name="featureGroupId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureGroupId"></a>

```typescript
public readonly featureGroupId: string;
```

- *Type:* string

Identifier of the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_group_id GoogleVertexAiFeatureOnlineStoreFeatureview#feature_group_id}

---

##### `featureIds`<sup>Required</sup> <a name="featureIds" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureIds"></a>

```typescript
public readonly featureIds: string[];
```

- *Type:* string[]

Identifiers of features under the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_ids GoogleVertexAiFeatureOnlineStoreFeatureview#feature_ids}

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

const googleVertexAiFeatureOnlineStoreFeatureviewSyncConfig: googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig.property.cron">cron</a></code> | <code>string</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". |

---

##### `cron`<sup>Optional</sup> <a name="cron" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#cron GoogleVertexAiFeatureOnlineStoreFeatureview#cron}

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

const googleVertexAiFeatureOnlineStoreFeatureviewTimeouts: googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#create GoogleVertexAiFeatureOnlineStoreFeatureview#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#delete GoogleVertexAiFeatureOnlineStoreFeatureview#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#update GoogleVertexAiFeatureOnlineStoreFeatureview#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#create GoogleVertexAiFeatureOnlineStoreFeatureview#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#delete GoogleVertexAiFeatureOnlineStoreFeatureview#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#update GoogleVertexAiFeatureOnlineStoreFeatureview#update}.

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

const googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig: googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.embeddingColumn">embeddingColumn</a></code> | <code>string</code> | Column of embedding. This column contains the source data to create index for vector search. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.bruteForceConfig">bruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a></code> | brute_force_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.crowdingColumn">crowdingColumn</a></code> | <code>string</code> | Column of crowding. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.distanceMeasureType">distanceMeasureType</a></code> | <code>string</code> | The distance measure used in nearest neighbor search. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | The number of dimensions of the input embedding. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.filterColumns">filterColumns</a></code> | <code>string[]</code> | Columns of features that are used to filter vector search results. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.treeAhConfig">treeAhConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a></code> | tree_ah_config block. |

---

##### `embeddingColumn`<sup>Required</sup> <a name="embeddingColumn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.embeddingColumn"></a>

```typescript
public readonly embeddingColumn: string;
```

- *Type:* string

Column of embedding. This column contains the source data to create index for vector search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#embedding_column GoogleVertexAiFeatureOnlineStoreFeatureview#embedding_column}

---

##### `bruteForceConfig`<sup>Optional</sup> <a name="bruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.bruteForceConfig"></a>

```typescript
public readonly bruteForceConfig: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a>

brute_force_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#brute_force_config GoogleVertexAiFeatureOnlineStoreFeatureview#brute_force_config}

---

##### `crowdingColumn`<sup>Optional</sup> <a name="crowdingColumn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.crowdingColumn"></a>

```typescript
public readonly crowdingColumn: string;
```

- *Type:* string

Column of crowding.

This column contains crowding attribute which is a constraint on a neighbor list produced by nearest neighbor search requiring that no more than some value k' of the k neighbors returned have the same value of crowdingAttribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#crowding_column GoogleVertexAiFeatureOnlineStoreFeatureview#crowding_column}

---

##### `distanceMeasureType`<sup>Optional</sup> <a name="distanceMeasureType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.distanceMeasureType"></a>

```typescript
public readonly distanceMeasureType: string;
```

- *Type:* string

The distance measure used in nearest neighbor search.

For details on allowed values, see the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.featureOnlineStores.featureViews#DistanceMeasureType). Possible values: ["SQUARED_L2_DISTANCE", "COSINE_DISTANCE", "DOT_PRODUCT_DISTANCE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#distance_measure_type GoogleVertexAiFeatureOnlineStoreFeatureview#distance_measure_type}

---

##### `embeddingDimension`<sup>Optional</sup> <a name="embeddingDimension" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

The number of dimensions of the input embedding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#embedding_dimension GoogleVertexAiFeatureOnlineStoreFeatureview#embedding_dimension}

---

##### `filterColumns`<sup>Optional</sup> <a name="filterColumns" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.filterColumns"></a>

```typescript
public readonly filterColumns: string[];
```

- *Type:* string[]

Columns of features that are used to filter vector search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#filter_columns GoogleVertexAiFeatureOnlineStoreFeatureview#filter_columns}

---

##### `treeAhConfig`<sup>Optional</sup> <a name="treeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.treeAhConfig"></a>

```typescript
public readonly treeAhConfig: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a>

tree_ah_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#tree_ah_config GoogleVertexAiFeatureOnlineStoreFeatureview#tree_ah_config}

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

const googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig: googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig = { ... }
```


### GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

const googleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig: googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig.property.leafNodeEmbeddingCount">leafNodeEmbeddingCount</a></code> | <code>string</code> | Number of embeddings on each leaf node. The default value is 1000 if not set. |

---

##### `leafNodeEmbeddingCount`<sup>Optional</sup> <a name="leafNodeEmbeddingCount" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig.property.leafNodeEmbeddingCount"></a>

```typescript
public readonly leafNodeEmbeddingCount: string;
```

- *Type:* string

Number of embeddings on each leaf node. The default value is 1000 if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vertex_ai_feature_online_store_featureview#leaf_node_embedding_count GoogleVertexAiFeatureOnlineStoreFeatureview#leaf_node_embedding_count}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

new googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumnsInput">entityIdColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumns">entityIdColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityIdColumnsInput`<sup>Optional</sup> <a name="entityIdColumnsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumnsInput"></a>

```typescript
public readonly entityIdColumnsInput: string[];
```

- *Type:* string[]

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `entityIdColumns`<sup>Required</sup> <a name="entityIdColumns" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumns"></a>

```typescript
public readonly entityIdColumns: string[];
```

- *Type:* string[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

new googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get"></a>

```typescript
public get(index: number): GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

new googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupIdInput">featureGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIdsInput">featureIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupId">featureGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIds">featureIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureGroupIdInput`<sup>Optional</sup> <a name="featureGroupIdInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupIdInput"></a>

```typescript
public readonly featureGroupIdInput: string;
```

- *Type:* string

---

##### `featureIdsInput`<sup>Optional</sup> <a name="featureIdsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIdsInput"></a>

```typescript
public readonly featureIdsInput: string[];
```

- *Type:* string[]

---

##### `featureGroupId`<sup>Required</sup> <a name="featureGroupId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupId"></a>

```typescript
public readonly featureGroupId: string;
```

- *Type:* string

---

##### `featureIds`<sup>Required</sup> <a name="featureIds" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIds"></a>

```typescript
public readonly featureIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

new googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups">putFeatureGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resetProjectNumber">resetProjectNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFeatureGroups` <a name="putFeatureGroups" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups"></a>

```typescript
public putFeatureGroups(value: IResolvable | GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]

---

##### `resetProjectNumber` <a name="resetProjectNumber" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resetProjectNumber"></a>

```typescript
public resetProjectNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroups">featureGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroupsInput">featureGroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumberInput">projectNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumber">projectNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureGroups`<sup>Required</sup> <a name="featureGroups" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroups"></a>

```typescript
public readonly featureGroups: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList</a>

---

##### `featureGroupsInput`<sup>Optional</sup> <a name="featureGroupsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroupsInput"></a>

```typescript
public readonly featureGroupsInput: IResolvable | GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]

---

##### `projectNumberInput`<sup>Optional</sup> <a name="projectNumberInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumberInput"></a>

```typescript
public readonly projectNumberInput: string;
```

- *Type:* string

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumber"></a>

```typescript
public readonly projectNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

new googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resetCron">resetCron</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCron` <a name="resetCron" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resetCron"></a>

```typescript
public resetCron(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cronInput">cronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cron">cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronInput`<sup>Optional</sup> <a name="cronInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cronInput"></a>

```typescript
public readonly cronInput: string;
```

- *Type:* string

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

new googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

new googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a>

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

new googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.putBruteForceConfig">putBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.putTreeAhConfig">putTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetBruteForceConfig">resetBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetCrowdingColumn">resetCrowdingColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetDistanceMeasureType">resetDistanceMeasureType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetEmbeddingDimension">resetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetFilterColumns">resetFilterColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetTreeAhConfig">resetTreeAhConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBruteForceConfig` <a name="putBruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.putBruteForceConfig"></a>

```typescript
public putBruteForceConfig(value: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.putBruteForceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a>

---

##### `putTreeAhConfig` <a name="putTreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.putTreeAhConfig"></a>

```typescript
public putTreeAhConfig(value: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.putTreeAhConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a>

---

##### `resetBruteForceConfig` <a name="resetBruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetBruteForceConfig"></a>

```typescript
public resetBruteForceConfig(): void
```

##### `resetCrowdingColumn` <a name="resetCrowdingColumn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetCrowdingColumn"></a>

```typescript
public resetCrowdingColumn(): void
```

##### `resetDistanceMeasureType` <a name="resetDistanceMeasureType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetDistanceMeasureType"></a>

```typescript
public resetDistanceMeasureType(): void
```

##### `resetEmbeddingDimension` <a name="resetEmbeddingDimension" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetEmbeddingDimension"></a>

```typescript
public resetEmbeddingDimension(): void
```

##### `resetFilterColumns` <a name="resetFilterColumns" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetFilterColumns"></a>

```typescript
public resetFilterColumns(): void
```

##### `resetTreeAhConfig` <a name="resetTreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetTreeAhConfig"></a>

```typescript
public resetTreeAhConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.bruteForceConfig">bruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.treeAhConfig">treeAhConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.bruteForceConfigInput">bruteForceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.crowdingColumnInput">crowdingColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.distanceMeasureTypeInput">distanceMeasureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingColumnInput">embeddingColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingDimensionInput">embeddingDimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.filterColumnsInput">filterColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.treeAhConfigInput">treeAhConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.crowdingColumn">crowdingColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.distanceMeasureType">distanceMeasureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingColumn">embeddingColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.filterColumns">filterColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bruteForceConfig`<sup>Required</sup> <a name="bruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.bruteForceConfig"></a>

```typescript
public readonly bruteForceConfig: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference</a>

---

##### `treeAhConfig`<sup>Required</sup> <a name="treeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.treeAhConfig"></a>

```typescript
public readonly treeAhConfig: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference</a>

---

##### `bruteForceConfigInput`<sup>Optional</sup> <a name="bruteForceConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.bruteForceConfigInput"></a>

```typescript
public readonly bruteForceConfigInput: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a>

---

##### `crowdingColumnInput`<sup>Optional</sup> <a name="crowdingColumnInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.crowdingColumnInput"></a>

```typescript
public readonly crowdingColumnInput: string;
```

- *Type:* string

---

##### `distanceMeasureTypeInput`<sup>Optional</sup> <a name="distanceMeasureTypeInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.distanceMeasureTypeInput"></a>

```typescript
public readonly distanceMeasureTypeInput: string;
```

- *Type:* string

---

##### `embeddingColumnInput`<sup>Optional</sup> <a name="embeddingColumnInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingColumnInput"></a>

```typescript
public readonly embeddingColumnInput: string;
```

- *Type:* string

---

##### `embeddingDimensionInput`<sup>Optional</sup> <a name="embeddingDimensionInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingDimensionInput"></a>

```typescript
public readonly embeddingDimensionInput: number;
```

- *Type:* number

---

##### `filterColumnsInput`<sup>Optional</sup> <a name="filterColumnsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.filterColumnsInput"></a>

```typescript
public readonly filterColumnsInput: string[];
```

- *Type:* string[]

---

##### `treeAhConfigInput`<sup>Optional</sup> <a name="treeAhConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.treeAhConfigInput"></a>

```typescript
public readonly treeAhConfigInput: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a>

---

##### `crowdingColumn`<sup>Required</sup> <a name="crowdingColumn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.crowdingColumn"></a>

```typescript
public readonly crowdingColumn: string;
```

- *Type:* string

---

##### `distanceMeasureType`<sup>Required</sup> <a name="distanceMeasureType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.distanceMeasureType"></a>

```typescript
public readonly distanceMeasureType: string;
```

- *Type:* string

---

##### `embeddingColumn`<sup>Required</sup> <a name="embeddingColumn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingColumn"></a>

```typescript
public readonly embeddingColumn: string;
```

- *Type:* string

---

##### `embeddingDimension`<sup>Required</sup> <a name="embeddingDimension" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

---

##### `filterColumns`<sup>Required</sup> <a name="filterColumns" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.filterColumns"></a>

```typescript
public readonly filterColumns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a>

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google-beta'

new googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount">resetLeafNodeEmbeddingCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLeafNodeEmbeddingCount` <a name="resetLeafNodeEmbeddingCount" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount"></a>

```typescript
public resetLeafNodeEmbeddingCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput">leafNodeEmbeddingCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount">leafNodeEmbeddingCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `leafNodeEmbeddingCountInput`<sup>Optional</sup> <a name="leafNodeEmbeddingCountInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput"></a>

```typescript
public readonly leafNodeEmbeddingCountInput: string;
```

- *Type:* string

---

##### `leafNodeEmbeddingCount`<sup>Required</sup> <a name="leafNodeEmbeddingCount" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount"></a>

```typescript
public readonly leafNodeEmbeddingCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a>

---



