# `googleVertexAiFeaturestoreEntitytype` Submodule <a name="`googleVertexAiFeaturestoreEntitytype` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeaturestoreEntitytype <a name="GoogleVertexAiFeaturestoreEntitytype" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype google_vertex_ai_featurestore_entitytype}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype(scope: Construct, id: string, config: GoogleVertexAiFeaturestoreEntitytypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig">GoogleVertexAiFeaturestoreEntitytypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig">GoogleVertexAiFeaturestoreEntitytypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.putMonitoringConfig">putMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetMonitoringConfig">resetMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetOfflineStorageTtlDays">resetOfflineStorageTtlDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMonitoringConfig` <a name="putMonitoringConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.putMonitoringConfig"></a>

```typescript
public putMonitoringConfig(value: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.putMonitoringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiFeaturestoreEntitytypeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts">GoogleVertexAiFeaturestoreEntitytypeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMonitoringConfig` <a name="resetMonitoringConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetMonitoringConfig"></a>

```typescript
public resetMonitoringConfig(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOfflineStorageTtlDays` <a name="resetOfflineStorageTtlDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetOfflineStorageTtlDays"></a>

```typescript
public resetOfflineStorageTtlDays(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeaturestoreEntitytype resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.isConstruct"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.isTerraformElement"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.isTerraformResource"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.generateConfigForImport"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleVertexAiFeaturestoreEntitytype resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiFeaturestoreEntitytype to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiFeaturestoreEntitytype that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeaturestoreEntitytype to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.monitoringConfig">monitoringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference">GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.featurestoreInput">featurestoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.monitoringConfigInput">monitoringConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.offlineStorageTtlDaysInput">offlineStorageTtlDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts">GoogleVertexAiFeaturestoreEntitytypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.featurestore">featurestore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.offlineStorageTtlDays">offlineStorageTtlDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `monitoringConfig`<sup>Required</sup> <a name="monitoringConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.monitoringConfig"></a>

```typescript
public readonly monitoringConfig: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference">GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `featurestoreInput`<sup>Optional</sup> <a name="featurestoreInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.featurestoreInput"></a>

```typescript
public readonly featurestoreInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `monitoringConfigInput`<sup>Optional</sup> <a name="monitoringConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.monitoringConfigInput"></a>

```typescript
public readonly monitoringConfigInput: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `offlineStorageTtlDaysInput`<sup>Optional</sup> <a name="offlineStorageTtlDaysInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.offlineStorageTtlDaysInput"></a>

```typescript
public readonly offlineStorageTtlDaysInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiFeaturestoreEntitytypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts">GoogleVertexAiFeaturestoreEntitytypeTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `featurestore`<sup>Required</sup> <a name="featurestore" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.featurestore"></a>

```typescript
public readonly featurestore: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `offlineStorageTtlDays`<sup>Required</sup> <a name="offlineStorageTtlDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.offlineStorageTtlDays"></a>

```typescript
public readonly offlineStorageTtlDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytype.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeaturestoreEntitytypeConfig <a name="GoogleVertexAiFeaturestoreEntitytypeConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreEntitytypeConfig: googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.featurestore">featurestore</a></code> | <code>string</code> | The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the EntityType. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#id GoogleVertexAiFeaturestoreEntitytype#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to this EntityType. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.monitoringConfig">monitoringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.name">name</a></code> | <code>string</code> | The name of the EntityType. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.offlineStorageTtlDays">offlineStorageTtlDays</a></code> | <code>number</code> | Config for data retention policy in offline storage. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts">GoogleVertexAiFeaturestoreEntitytypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `featurestore`<sup>Required</sup> <a name="featurestore" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.featurestore"></a>

```typescript
public readonly featurestore: string;
```

- *Type:* string

The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#featurestore GoogleVertexAiFeaturestoreEntitytype#featurestore}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the EntityType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#description GoogleVertexAiFeaturestoreEntitytype#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#id GoogleVertexAiFeaturestoreEntitytype#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to this EntityType.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#labels GoogleVertexAiFeaturestoreEntitytype#labels}

---

##### `monitoringConfig`<sup>Optional</sup> <a name="monitoringConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.monitoringConfig"></a>

```typescript
public readonly monitoringConfig: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#monitoring_config GoogleVertexAiFeaturestoreEntitytype#monitoring_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the EntityType.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#name GoogleVertexAiFeaturestoreEntitytype#name}

---

##### `offlineStorageTtlDays`<sup>Optional</sup> <a name="offlineStorageTtlDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.offlineStorageTtlDays"></a>

```typescript
public readonly offlineStorageTtlDays: number;
```

- *Type:* number

Config for data retention policy in offline storage.

TTL in days for feature values that will be stored in offline storage. The Feature Store offline storage periodically removes obsolete feature values older than offlineStorageTtlDays since the feature generation time. If unset (or explicitly set to 0), default to 4000 days TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#offline_storage_ttl_days GoogleVertexAiFeaturestoreEntitytype#offline_storage_ttl_days}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiFeaturestoreEntitytypeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts">GoogleVertexAiFeaturestoreEntitytypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#timeouts GoogleVertexAiFeaturestoreEntitytype#timeouts}

---

### GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig <a name="GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreEntitytypeMonitoringConfig: googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig.property.categoricalThresholdConfig">categoricalThresholdConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a></code> | categorical_threshold_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig.property.importFeaturesAnalysis">importFeaturesAnalysis</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a></code> | import_features_analysis block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig.property.numericalThresholdConfig">numericalThresholdConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a></code> | numerical_threshold_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig.property.snapshotAnalysis">snapshotAnalysis</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a></code> | snapshot_analysis block. |

---

##### `categoricalThresholdConfig`<sup>Optional</sup> <a name="categoricalThresholdConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig.property.categoricalThresholdConfig"></a>

```typescript
public readonly categoricalThresholdConfig: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a>

categorical_threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#categorical_threshold_config GoogleVertexAiFeaturestoreEntitytype#categorical_threshold_config}

---

##### `importFeaturesAnalysis`<sup>Optional</sup> <a name="importFeaturesAnalysis" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig.property.importFeaturesAnalysis"></a>

```typescript
public readonly importFeaturesAnalysis: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a>

import_features_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#import_features_analysis GoogleVertexAiFeaturestoreEntitytype#import_features_analysis}

---

##### `numericalThresholdConfig`<sup>Optional</sup> <a name="numericalThresholdConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig.property.numericalThresholdConfig"></a>

```typescript
public readonly numericalThresholdConfig: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a>

numerical_threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#numerical_threshold_config GoogleVertexAiFeaturestoreEntitytype#numerical_threshold_config}

---

##### `snapshotAnalysis`<sup>Optional</sup> <a name="snapshotAnalysis" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig.property.snapshotAnalysis"></a>

```typescript
public readonly snapshotAnalysis: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a>

snapshot_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#snapshot_analysis GoogleVertexAiFeaturestoreEntitytype#snapshot_analysis}

---

### GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig <a name="GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig: googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig.property.value">value</a></code> | <code>number</code> | Specify a threshold value that can trigger the alert. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Specify a threshold value that can trigger the alert.

For categorical feature, the distribution distance is calculated by L-inifinity norm. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#value GoogleVertexAiFeaturestoreEntitytype#value}

---

### GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis <a name="GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis: googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.property.anomalyDetectionBaseline">anomalyDetectionBaseline</a></code> | <code>string</code> | Defines the baseline to do anomaly detection for feature values imported by each [entityTypes.importFeatureValues][] operation. The value must be one of the values below: * LATEST_STATS: Choose the later one statistics generated by either most recent snapshot analysis or previous import features analysis. If non of them exists, skip anomaly detection and only generate a statistics. * MOST_RECENT_SNAPSHOT_STATS: Use the statistics generated by the most recent snapshot analysis if exists. * PREVIOUS_IMPORT_FEATURES_STATS: Use the statistics generated by the previous import features analysis if exists. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.property.state">state</a></code> | <code>string</code> | Whether to enable / disable / inherite default hebavior for import features analysis. |

---

##### `anomalyDetectionBaseline`<sup>Optional</sup> <a name="anomalyDetectionBaseline" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.property.anomalyDetectionBaseline"></a>

```typescript
public readonly anomalyDetectionBaseline: string;
```

- *Type:* string

Defines the baseline to do anomaly detection for feature values imported by each [entityTypes.importFeatureValues][] operation. The value must be one of the values below: * LATEST_STATS: Choose the later one statistics generated by either most recent snapshot analysis or previous import features analysis. If non of them exists, skip anomaly detection and only generate a statistics. * MOST_RECENT_SNAPSHOT_STATS: Use the statistics generated by the most recent snapshot analysis if exists. * PREVIOUS_IMPORT_FEATURES_STATS: Use the statistics generated by the previous import features analysis if exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#anomaly_detection_baseline GoogleVertexAiFeaturestoreEntitytype#anomaly_detection_baseline}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Whether to enable / disable / inherite default hebavior for import features analysis.

The value must be one of the values below:
* DEFAULT: The default behavior of whether to enable the monitoring. EntityType-level config: disabled.
* ENABLED: Explicitly enables import features analysis. EntityType-level config: by default enables import features analysis for all Features under it.
* DISABLED: Explicitly disables import features analysis. EntityType-level config: by default disables import features analysis for all Features under it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#state GoogleVertexAiFeaturestoreEntitytype#state}

---

### GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig <a name="GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig: googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig.property.value">value</a></code> | <code>number</code> | Specify a threshold value that can trigger the alert. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Specify a threshold value that can trigger the alert.

For numerical feature, the distribution distance is calculated by Jensen–Shannon divergence. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#value GoogleVertexAiFeaturestoreEntitytype#value}

---

### GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis <a name="GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis: googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The monitoring schedule for snapshot analysis. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.monitoringInterval">monitoringInterval</a></code> | <code>string</code> | Configuration of the snapshot analysis based monitoring pipeline running interval. The value is rolled up to full day. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.monitoringIntervalDays">monitoringIntervalDays</a></code> | <code>number</code> | Configuration of the snapshot analysis based monitoring pipeline running interval. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.stalenessDays">stalenessDays</a></code> | <code>number</code> | Customized export features time window for snapshot analysis. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The monitoring schedule for snapshot analysis.

For EntityType-level config: unset / disabled = true indicates disabled by default for Features under it; otherwise by default enable snapshot analysis monitoring with monitoringInterval for Features under it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#disabled GoogleVertexAiFeaturestoreEntitytype#disabled}

---

##### `monitoringInterval`<sup>Optional</sup> <a name="monitoringInterval" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.monitoringInterval"></a>

```typescript
public readonly monitoringInterval: string;
```

- *Type:* string

Configuration of the snapshot analysis based monitoring pipeline running interval. The value is rolled up to full day.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#monitoring_interval GoogleVertexAiFeaturestoreEntitytype#monitoring_interval}

---

##### `monitoringIntervalDays`<sup>Optional</sup> <a name="monitoringIntervalDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.monitoringIntervalDays"></a>

```typescript
public readonly monitoringIntervalDays: number;
```

- *Type:* number

Configuration of the snapshot analysis based monitoring pipeline running interval.

The value indicates number of days. The default value is 1.
If both FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days and [FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval][] are set when creating/updating EntityTypes/Features, FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#monitoring_interval_days GoogleVertexAiFeaturestoreEntitytype#monitoring_interval_days}

---

##### `stalenessDays`<sup>Optional</sup> <a name="stalenessDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.stalenessDays"></a>

```typescript
public readonly stalenessDays: number;
```

- *Type:* number

Customized export features time window for snapshot analysis.

Unit is one day. The default value is 21 days. Minimum value is 1 day. Maximum value is 4000 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#staleness_days GoogleVertexAiFeaturestoreEntitytype#staleness_days}

---

### GoogleVertexAiFeaturestoreEntitytypeTimeouts <a name="GoogleVertexAiFeaturestoreEntitytypeTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreEntitytypeTimeouts: googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#create GoogleVertexAiFeaturestoreEntitytype#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#delete GoogleVertexAiFeaturestoreEntitytype#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#update GoogleVertexAiFeaturestoreEntitytype#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#create GoogleVertexAiFeaturestoreEntitytype#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#delete GoogleVertexAiFeaturestoreEntitytype#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore_entitytype#update GoogleVertexAiFeaturestoreEntitytype#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference <a name="GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a>

---


### GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference <a name="GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resetAnomalyDetectionBaseline">resetAnomalyDetectionBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnomalyDetectionBaseline` <a name="resetAnomalyDetectionBaseline" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resetAnomalyDetectionBaseline"></a>

```typescript
public resetAnomalyDetectionBaseline(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.anomalyDetectionBaselineInput">anomalyDetectionBaselineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.anomalyDetectionBaseline">anomalyDetectionBaseline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `anomalyDetectionBaselineInput`<sup>Optional</sup> <a name="anomalyDetectionBaselineInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.anomalyDetectionBaselineInput"></a>

```typescript
public readonly anomalyDetectionBaselineInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `anomalyDetectionBaseline`<sup>Required</sup> <a name="anomalyDetectionBaseline" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.anomalyDetectionBaseline"></a>

```typescript
public readonly anomalyDetectionBaseline: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a>

---


### GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference <a name="GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a>

---


### GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference <a name="GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putCategoricalThresholdConfig">putCategoricalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putImportFeaturesAnalysis">putImportFeaturesAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putNumericalThresholdConfig">putNumericalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putSnapshotAnalysis">putSnapshotAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetCategoricalThresholdConfig">resetCategoricalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetImportFeaturesAnalysis">resetImportFeaturesAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetNumericalThresholdConfig">resetNumericalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetSnapshotAnalysis">resetSnapshotAnalysis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCategoricalThresholdConfig` <a name="putCategoricalThresholdConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putCategoricalThresholdConfig"></a>

```typescript
public putCategoricalThresholdConfig(value: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putCategoricalThresholdConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a>

---

##### `putImportFeaturesAnalysis` <a name="putImportFeaturesAnalysis" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putImportFeaturesAnalysis"></a>

```typescript
public putImportFeaturesAnalysis(value: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putImportFeaturesAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a>

---

##### `putNumericalThresholdConfig` <a name="putNumericalThresholdConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putNumericalThresholdConfig"></a>

```typescript
public putNumericalThresholdConfig(value: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putNumericalThresholdConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a>

---

##### `putSnapshotAnalysis` <a name="putSnapshotAnalysis" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putSnapshotAnalysis"></a>

```typescript
public putSnapshotAnalysis(value: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putSnapshotAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a>

---

##### `resetCategoricalThresholdConfig` <a name="resetCategoricalThresholdConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetCategoricalThresholdConfig"></a>

```typescript
public resetCategoricalThresholdConfig(): void
```

##### `resetImportFeaturesAnalysis` <a name="resetImportFeaturesAnalysis" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetImportFeaturesAnalysis"></a>

```typescript
public resetImportFeaturesAnalysis(): void
```

##### `resetNumericalThresholdConfig` <a name="resetNumericalThresholdConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetNumericalThresholdConfig"></a>

```typescript
public resetNumericalThresholdConfig(): void
```

##### `resetSnapshotAnalysis` <a name="resetSnapshotAnalysis" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetSnapshotAnalysis"></a>

```typescript
public resetSnapshotAnalysis(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.categoricalThresholdConfig">categoricalThresholdConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.importFeaturesAnalysis">importFeaturesAnalysis</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.numericalThresholdConfig">numericalThresholdConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.snapshotAnalysis">snapshotAnalysis</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.categoricalThresholdConfigInput">categoricalThresholdConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.importFeaturesAnalysisInput">importFeaturesAnalysisInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.numericalThresholdConfigInput">numericalThresholdConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.snapshotAnalysisInput">snapshotAnalysisInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoricalThresholdConfig`<sup>Required</sup> <a name="categoricalThresholdConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.categoricalThresholdConfig"></a>

```typescript
public readonly categoricalThresholdConfig: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference</a>

---

##### `importFeaturesAnalysis`<sup>Required</sup> <a name="importFeaturesAnalysis" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.importFeaturesAnalysis"></a>

```typescript
public readonly importFeaturesAnalysis: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference</a>

---

##### `numericalThresholdConfig`<sup>Required</sup> <a name="numericalThresholdConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.numericalThresholdConfig"></a>

```typescript
public readonly numericalThresholdConfig: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference</a>

---

##### `snapshotAnalysis`<sup>Required</sup> <a name="snapshotAnalysis" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.snapshotAnalysis"></a>

```typescript
public readonly snapshotAnalysis: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference</a>

---

##### `categoricalThresholdConfigInput`<sup>Optional</sup> <a name="categoricalThresholdConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.categoricalThresholdConfigInput"></a>

```typescript
public readonly categoricalThresholdConfigInput: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a>

---

##### `importFeaturesAnalysisInput`<sup>Optional</sup> <a name="importFeaturesAnalysisInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.importFeaturesAnalysisInput"></a>

```typescript
public readonly importFeaturesAnalysisInput: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a>

---

##### `numericalThresholdConfigInput`<sup>Optional</sup> <a name="numericalThresholdConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.numericalThresholdConfigInput"></a>

```typescript
public readonly numericalThresholdConfigInput: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a>

---

##### `snapshotAnalysisInput`<sup>Optional</sup> <a name="snapshotAnalysisInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.snapshotAnalysisInput"></a>

```typescript
public readonly snapshotAnalysisInput: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig</a>

---


### GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference <a name="GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetMonitoringInterval">resetMonitoringInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetMonitoringIntervalDays">resetMonitoringIntervalDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetStalenessDays">resetStalenessDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetMonitoringInterval` <a name="resetMonitoringInterval" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetMonitoringInterval"></a>

```typescript
public resetMonitoringInterval(): void
```

##### `resetMonitoringIntervalDays` <a name="resetMonitoringIntervalDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetMonitoringIntervalDays"></a>

```typescript
public resetMonitoringIntervalDays(): void
```

##### `resetStalenessDays` <a name="resetStalenessDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetStalenessDays"></a>

```typescript
public resetStalenessDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalDaysInput">monitoringIntervalDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalInput">monitoringIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.stalenessDaysInput">stalenessDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringInterval">monitoringInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalDays">monitoringIntervalDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.stalenessDays">stalenessDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monitoringIntervalDaysInput`<sup>Optional</sup> <a name="monitoringIntervalDaysInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalDaysInput"></a>

```typescript
public readonly monitoringIntervalDaysInput: number;
```

- *Type:* number

---

##### `monitoringIntervalInput`<sup>Optional</sup> <a name="monitoringIntervalInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalInput"></a>

```typescript
public readonly monitoringIntervalInput: string;
```

- *Type:* string

---

##### `stalenessDaysInput`<sup>Optional</sup> <a name="stalenessDaysInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.stalenessDaysInput"></a>

```typescript
public readonly stalenessDaysInput: number;
```

- *Type:* number

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monitoringInterval`<sup>Required</sup> <a name="monitoringInterval" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringInterval"></a>

```typescript
public readonly monitoringInterval: string;
```

- *Type:* string

---

##### `monitoringIntervalDays`<sup>Required</sup> <a name="monitoringIntervalDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalDays"></a>

```typescript
public readonly monitoringIntervalDays: number;
```

- *Type:* number

---

##### `stalenessDays`<sup>Required</sup> <a name="stalenessDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.stalenessDays"></a>

```typescript
public readonly stalenessDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a>

---


### GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference <a name="GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreEntitytype } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts">GoogleVertexAiFeaturestoreEntitytypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiFeaturestoreEntitytypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytype.GoogleVertexAiFeaturestoreEntitytypeTimeouts">GoogleVertexAiFeaturestoreEntitytypeTimeouts</a>

---



