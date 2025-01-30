# `googleCloudbuildWorkerPool` Submodule <a name="`googleCloudbuildWorkerPool` Submodule" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudbuildWorkerPool <a name="GoogleCloudbuildWorkerPool" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool google_cloudbuild_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

new googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool(scope: Construct, id: string, config: GoogleCloudbuildWorkerPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig">GoogleCloudbuildWorkerPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig">GoogleCloudbuildWorkerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putPrivateServiceConnect">putPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putWorkerConfig">putWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetPrivateServiceConnect">resetPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetWorkerConfig">resetWorkerConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: GoogleCloudbuildWorkerPoolNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a>

---

##### `putPrivateServiceConnect` <a name="putPrivateServiceConnect" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putPrivateServiceConnect"></a>

```typescript
public putPrivateServiceConnect(value: GoogleCloudbuildWorkerPoolPrivateServiceConnect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putPrivateServiceConnect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudbuildWorkerPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>

---

##### `putWorkerConfig` <a name="putWorkerConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putWorkerConfig"></a>

```typescript
public putWorkerConfig(value: GoogleCloudbuildWorkerPoolWorkerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetPrivateServiceConnect` <a name="resetPrivateServiceConnect" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetPrivateServiceConnect"></a>

```typescript
public resetPrivateServiceConnect(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkerConfig` <a name="resetWorkerConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetWorkerConfig"></a>

```typescript
public resetWorkerConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudbuildWorkerPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isConstruct"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformElement"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformResource"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleCloudbuildWorkerPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudbuildWorkerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudbuildWorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudbuildWorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference">GoogleCloudbuildWorkerPoolNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.privateServiceConnect">privateServiceConnect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference">GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference">GoogleCloudbuildWorkerPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.workerConfig">workerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference">GoogleCloudbuildWorkerPoolWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.privateServiceConnectInput">privateServiceConnectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.workerConfigInput">workerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleCloudbuildWorkerPoolNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference">GoogleCloudbuildWorkerPoolNetworkConfigOutputReference</a>

---

##### `privateServiceConnect`<sup>Required</sup> <a name="privateServiceConnect" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.privateServiceConnect"></a>

```typescript
public readonly privateServiceConnect: GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference">GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudbuildWorkerPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference">GoogleCloudbuildWorkerPoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `workerConfig`<sup>Required</sup> <a name="workerConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.workerConfig"></a>

```typescript
public readonly workerConfig: GoogleCloudbuildWorkerPoolWorkerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference">GoogleCloudbuildWorkerPoolWorkerConfigOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: GoogleCloudbuildWorkerPoolNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a>

---

##### `privateServiceConnectInput`<sup>Optional</sup> <a name="privateServiceConnectInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.privateServiceConnectInput"></a>

```typescript
public readonly privateServiceConnectInput: GoogleCloudbuildWorkerPoolPrivateServiceConnect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudbuildWorkerPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>

---

##### `workerConfigInput`<sup>Optional</sup> <a name="workerConfigInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.workerConfigInput"></a>

```typescript
public readonly workerConfigInput: GoogleCloudbuildWorkerPoolWorkerConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudbuildWorkerPoolConfig <a name="GoogleCloudbuildWorkerPoolConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.Initializer"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

const googleCloudbuildWorkerPoolConfig: googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.name">name</a></code> | <code>string</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#id GoogleCloudbuildWorkerPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.privateServiceConnect">privateServiceConnect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | private_service_connect block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.workerConfig">workerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a></code> | worker_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#location GoogleCloudbuildWorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#name GoogleCloudbuildWorkerPool#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#annotations GoogleCloudbuildWorkerPool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#display_name GoogleCloudbuildWorkerPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#id GoogleCloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleCloudbuildWorkerPoolNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#network_config GoogleCloudbuildWorkerPool#network_config}

---

##### `privateServiceConnect`<sup>Optional</sup> <a name="privateServiceConnect" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.privateServiceConnect"></a>

```typescript
public readonly privateServiceConnect: GoogleCloudbuildWorkerPoolPrivateServiceConnect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

private_service_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#private_service_connect GoogleCloudbuildWorkerPool#private_service_connect}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#project GoogleCloudbuildWorkerPool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudbuildWorkerPoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#timeouts GoogleCloudbuildWorkerPool#timeouts}

---

##### `workerConfig`<sup>Optional</sup> <a name="workerConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.workerConfig"></a>

```typescript
public readonly workerConfig: GoogleCloudbuildWorkerPoolWorkerConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#worker_config GoogleCloudbuildWorkerPool#worker_config}

---

### GoogleCloudbuildWorkerPoolNetworkConfig <a name="GoogleCloudbuildWorkerPoolNetworkConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.Initializer"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

const googleCloudbuildWorkerPoolNetworkConfig: googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.property.peeredNetwork">peeredNetwork</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.property.peeredNetworkIpRange">peeredNetworkIpRange</a></code> | <code>string</code> | Optional. |

---

##### `peeredNetwork`<sup>Required</sup> <a name="peeredNetwork" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.property.peeredNetwork"></a>

```typescript
public readonly peeredNetwork: string;
```

- *Type:* string

Required.

Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to `WorkerPool.project_id` on the service producer network. Must be in the format `projects/{project}/global/networks/{network}`, where `{project}` is a project number, such as `12345`, and `{network}` is the name of a VPC network in the project. See [Understanding network configuration options](https://cloud.google.com/cloud-build/docs/custom-workers/set-up-custom-worker-pool-environment#understanding_the_network_configuration_options)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#peered_network GoogleCloudbuildWorkerPool#peered_network}

---

##### `peeredNetworkIpRange`<sup>Optional</sup> <a name="peeredNetworkIpRange" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.property.peeredNetworkIpRange"></a>

```typescript
public readonly peeredNetworkIpRange: string;
```

- *Type:* string

Optional.

Immutable. Subnet IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a prefix size of 29 bits. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#peered_network_ip_range GoogleCloudbuildWorkerPool#peered_network_ip_range}

---

### GoogleCloudbuildWorkerPoolPrivateServiceConnect <a name="GoogleCloudbuildWorkerPoolPrivateServiceConnect" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.Initializer"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

const googleCloudbuildWorkerPoolPrivateServiceConnect: googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.property.routeAllTraffic">routeAllTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Immutable. |

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

Required.

Immutable. The network attachment that the worker network interface is connected to. Must be in the format `projects/{project}/regions/{region}/networkAttachments/{networkAttachment}`. The region of network attachment must be the same as the worker pool. See [Network Attachments](https://cloud.google.com/vpc/docs/about-network-attachments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#network_attachment GoogleCloudbuildWorkerPool#network_attachment}

---

##### `routeAllTraffic`<sup>Optional</sup> <a name="routeAllTraffic" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.property.routeAllTraffic"></a>

```typescript
public readonly routeAllTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Immutable.

Route all traffic through PSC interface. Enable this if you want full control of traffic in the private pool. Configure Cloud NAT for the subnet of network attachment if you need to access public Internet. If false, Only route private IPs, e.g. 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 through PSC interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#route_all_traffic GoogleCloudbuildWorkerPool#route_all_traffic}

---

### GoogleCloudbuildWorkerPoolTimeouts <a name="GoogleCloudbuildWorkerPoolTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.Initializer"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

const googleCloudbuildWorkerPoolTimeouts: googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#create GoogleCloudbuildWorkerPool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#delete GoogleCloudbuildWorkerPool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#update GoogleCloudbuildWorkerPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#create GoogleCloudbuildWorkerPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#delete GoogleCloudbuildWorkerPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#update GoogleCloudbuildWorkerPool#update}.

---

### GoogleCloudbuildWorkerPoolWorkerConfig <a name="GoogleCloudbuildWorkerPoolWorkerConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.Initializer"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

const googleCloudbuildWorkerPoolWorkerConfig: googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Size of the disk attached to the worker, in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.machineType">machineType</a></code> | <code>string</code> | Machine type of a worker, such as `n1-standard-1`. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.noExternalIp">noExternalIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, workers are created without any public address, which prevents network egress to public IPs. |

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Size of the disk attached to the worker, in GB.

See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). Specify a value of up to 1000. If `0` is specified, Cloud Build will use a standard disk size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#disk_size_gb GoogleCloudbuildWorkerPool#disk_size_gb}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

Machine type of a worker, such as `n1-standard-1`.

See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). If left blank, Cloud Build will use `n1-standard-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#machine_type GoogleCloudbuildWorkerPool#machine_type}

---

##### `noExternalIp`<sup>Optional</sup> <a name="noExternalIp" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.noExternalIp"></a>

```typescript
public readonly noExternalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, workers are created without any public address, which prevents network egress to public IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloudbuild_worker_pool#no_external_ip GoogleCloudbuildWorkerPool#no_external_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudbuildWorkerPoolNetworkConfigOutputReference <a name="GoogleCloudbuildWorkerPoolNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

new googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resetPeeredNetworkIpRange">resetPeeredNetworkIpRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeeredNetworkIpRange` <a name="resetPeeredNetworkIpRange" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resetPeeredNetworkIpRange"></a>

```typescript
public resetPeeredNetworkIpRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkInput">peeredNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRangeInput">peeredNetworkIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork">peeredNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange">peeredNetworkIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peeredNetworkInput`<sup>Optional</sup> <a name="peeredNetworkInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkInput"></a>

```typescript
public readonly peeredNetworkInput: string;
```

- *Type:* string

---

##### `peeredNetworkIpRangeInput`<sup>Optional</sup> <a name="peeredNetworkIpRangeInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRangeInput"></a>

```typescript
public readonly peeredNetworkIpRangeInput: string;
```

- *Type:* string

---

##### `peeredNetwork`<sup>Required</sup> <a name="peeredNetwork" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork"></a>

```typescript
public readonly peeredNetwork: string;
```

- *Type:* string

---

##### `peeredNetworkIpRange`<sup>Required</sup> <a name="peeredNetworkIpRange" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange"></a>

```typescript
public readonly peeredNetworkIpRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudbuildWorkerPoolNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a>

---


### GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference <a name="GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

new googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resetRouteAllTraffic">resetRouteAllTraffic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRouteAllTraffic` <a name="resetRouteAllTraffic" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resetRouteAllTraffic"></a>

```typescript
public resetRouteAllTraffic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTrafficInput">routeAllTrafficInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic">routeAllTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `routeAllTrafficInput`<sup>Optional</sup> <a name="routeAllTrafficInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTrafficInput"></a>

```typescript
public readonly routeAllTrafficInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `routeAllTraffic`<sup>Required</sup> <a name="routeAllTraffic" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic"></a>

```typescript
public readonly routeAllTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudbuildWorkerPoolPrivateServiceConnect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---


### GoogleCloudbuildWorkerPoolTimeoutsOutputReference <a name="GoogleCloudbuildWorkerPoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

new googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudbuildWorkerPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>

---


### GoogleCloudbuildWorkerPoolWorkerConfigOutputReference <a name="GoogleCloudbuildWorkerPoolWorkerConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudbuildWorkerPool } from '@cdktf/provider-google-beta'

new googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetNoExternalIp">resetNoExternalIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetNoExternalIp` <a name="resetNoExternalIp" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetNoExternalIp"></a>

```typescript
public resetNoExternalIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIpInput">noExternalIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp">noExternalIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `noExternalIpInput`<sup>Optional</sup> <a name="noExternalIpInput" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIpInput"></a>

```typescript
public readonly noExternalIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `noExternalIp`<sup>Required</sup> <a name="noExternalIp" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp"></a>

```typescript
public readonly noExternalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudbuildWorkerPoolWorkerConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a>

---



