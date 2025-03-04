# `googleAppEngineServiceSplitTraffic` Submodule <a name="`googleAppEngineServiceSplitTraffic` Submodule" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineServiceSplitTraffic <a name="GoogleAppEngineServiceSplitTraffic" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic google_app_engine_service_split_traffic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer"></a>

```typescript
import { googleAppEngineServiceSplitTraffic } from '@cdktf/provider-google-beta'

new googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic(scope: Construct, id: string, config: GoogleAppEngineServiceSplitTrafficConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig">GoogleAppEngineServiceSplitTrafficConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig">GoogleAppEngineServiceSplitTrafficConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putSplit">putSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetMigrateTraffic">resetMigrateTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSplit` <a name="putSplit" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putSplit"></a>

```typescript
public putSplit(value: GoogleAppEngineServiceSplitTrafficSplit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putSplit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAppEngineServiceSplitTrafficTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMigrateTraffic` <a name="resetMigrateTraffic" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetMigrateTraffic"></a>

```typescript
public resetMigrateTraffic(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAppEngineServiceSplitTraffic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isConstruct"></a>

```typescript
import { googleAppEngineServiceSplitTraffic } from '@cdktf/provider-google-beta'

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformElement"></a>

```typescript
import { googleAppEngineServiceSplitTraffic } from '@cdktf/provider-google-beta'

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformResource"></a>

```typescript
import { googleAppEngineServiceSplitTraffic } from '@cdktf/provider-google-beta'

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport"></a>

```typescript
import { googleAppEngineServiceSplitTraffic } from '@cdktf/provider-google-beta'

googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleAppEngineServiceSplitTraffic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAppEngineServiceSplitTraffic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAppEngineServiceSplitTraffic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineServiceSplitTraffic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.split">split</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference">GoogleAppEngineServiceSplitTrafficSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference">GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.migrateTrafficInput">migrateTrafficInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.splitInput">splitInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.migrateTraffic">migrateTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.split"></a>

```typescript
public readonly split: GoogleAppEngineServiceSplitTrafficSplitOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference">GoogleAppEngineServiceSplitTrafficSplitOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference">GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `migrateTrafficInput`<sup>Optional</sup> <a name="migrateTrafficInput" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.migrateTrafficInput"></a>

```typescript
public readonly migrateTrafficInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `splitInput`<sup>Optional</sup> <a name="splitInput" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.splitInput"></a>

```typescript
public readonly splitInput: GoogleAppEngineServiceSplitTrafficSplit;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAppEngineServiceSplitTrafficTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `migrateTraffic`<sup>Required</sup> <a name="migrateTraffic" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.migrateTraffic"></a>

```typescript
public readonly migrateTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTraffic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineServiceSplitTrafficConfig <a name="GoogleAppEngineServiceSplitTrafficConfig" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.Initializer"></a>

```typescript
import { googleAppEngineServiceSplitTraffic } from '@cdktf/provider-google-beta'

const googleAppEngineServiceSplitTrafficConfig: googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.service">service</a></code> | <code>string</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.split">split</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a></code> | split block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#id GoogleAppEngineServiceSplitTraffic#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.migrateTraffic">migrateTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true traffic will be migrated to this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#project GoogleAppEngineServiceSplitTraffic#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#service GoogleAppEngineServiceSplitTraffic#service}

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.split"></a>

```typescript
public readonly split: GoogleAppEngineServiceSplitTrafficSplit;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a>

split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#split GoogleAppEngineServiceSplitTraffic#split}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#id GoogleAppEngineServiceSplitTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migrateTraffic`<sup>Optional</sup> <a name="migrateTraffic" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.migrateTraffic"></a>

```typescript
public readonly migrateTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true traffic will be migrated to this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#migrate_traffic GoogleAppEngineServiceSplitTraffic#migrate_traffic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#project GoogleAppEngineServiceSplitTraffic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAppEngineServiceSplitTrafficTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#timeouts GoogleAppEngineServiceSplitTraffic#timeouts}

---

### GoogleAppEngineServiceSplitTrafficSplit <a name="GoogleAppEngineServiceSplitTrafficSplit" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit.Initializer"></a>

```typescript
import { googleAppEngineServiceSplitTraffic } from '@cdktf/provider-google-beta'

const googleAppEngineServiceSplitTrafficSplit: googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit.property.allocations">allocations</a></code> | <code>{[ key: string ]: string}</code> | Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit.property.shardBy">shardBy</a></code> | <code>string</code> | Mechanism used to determine which version a request is sent to. |

---

##### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit.property.allocations"></a>

```typescript
public readonly allocations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#allocations GoogleAppEngineServiceSplitTraffic#allocations}

---

##### `shardBy`<sup>Optional</sup> <a name="shardBy" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit.property.shardBy"></a>

```typescript
public readonly shardBy: string;
```

- *Type:* string

Mechanism used to determine which version a request is sent to.

The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#shard_by GoogleAppEngineServiceSplitTraffic#shard_by}

---

### GoogleAppEngineServiceSplitTrafficTimeouts <a name="GoogleAppEngineServiceSplitTrafficTimeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.Initializer"></a>

```typescript
import { googleAppEngineServiceSplitTraffic } from '@cdktf/provider-google-beta'

const googleAppEngineServiceSplitTrafficTimeouts: googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#create GoogleAppEngineServiceSplitTraffic#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#delete GoogleAppEngineServiceSplitTraffic#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#update GoogleAppEngineServiceSplitTraffic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#create GoogleAppEngineServiceSplitTraffic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#delete GoogleAppEngineServiceSplitTraffic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_service_split_traffic#update GoogleAppEngineServiceSplitTraffic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineServiceSplitTrafficSplitOutputReference <a name="GoogleAppEngineServiceSplitTrafficSplitOutputReference" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.Initializer"></a>

```typescript
import { googleAppEngineServiceSplitTraffic } from '@cdktf/provider-google-beta'

new googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.resetShardBy">resetShardBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetShardBy` <a name="resetShardBy" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.resetShardBy"></a>

```typescript
public resetShardBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput">allocationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput">shardByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.allocations">allocations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.shardBy">shardBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationsInput`<sup>Optional</sup> <a name="allocationsInput" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput"></a>

```typescript
public readonly allocationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `shardByInput`<sup>Optional</sup> <a name="shardByInput" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput"></a>

```typescript
public readonly shardByInput: string;
```

- *Type:* string

---

##### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.allocations"></a>

```typescript
public readonly allocations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `shardBy`<sup>Required</sup> <a name="shardBy" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.shardBy"></a>

```typescript
public readonly shardBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineServiceSplitTrafficSplit;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficSplit">GoogleAppEngineServiceSplitTrafficSplit</a>

---


### GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference <a name="GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAppEngineServiceSplitTraffic } from '@cdktf/provider-google-beta'

new googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineServiceSplitTrafficTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineServiceSplitTraffic.GoogleAppEngineServiceSplitTrafficTimeouts">GoogleAppEngineServiceSplitTrafficTimeouts</a>

---



