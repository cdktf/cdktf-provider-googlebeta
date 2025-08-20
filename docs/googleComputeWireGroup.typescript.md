# `googleComputeWireGroup` Submodule <a name="`googleComputeWireGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeWireGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeWireGroup <a name="GoogleComputeWireGroup" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group google_compute_wire_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroup(scope: Construct, id: string, config: GoogleComputeWireGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig">GoogleComputeWireGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig">GoogleComputeWireGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireGroupProperties">putWireGroupProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireProperties">putWireProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetWireGroupProperties">resetWireGroupProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetWireProperties">resetWireProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoints` <a name="putEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putEndpoints"></a>

```typescript
public putEndpoints(value: IResolvable | GoogleComputeWireGroupEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putEndpoints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeWireGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a>

---

##### `putWireGroupProperties` <a name="putWireGroupProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireGroupProperties"></a>

```typescript
public putWireGroupProperties(value: GoogleComputeWireGroupWireGroupProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireGroupProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a>

---

##### `putWireProperties` <a name="putWireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireProperties"></a>

```typescript
public putWireProperties(value: GoogleComputeWireGroupWireProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.putWireProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a>

---

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetAdminEnabled"></a>

```typescript
public resetAdminEnabled(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetEndpoints"></a>

```typescript
public resetEndpoints(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWireGroupProperties` <a name="resetWireGroupProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetWireGroupProperties"></a>

```typescript
public resetWireGroupProperties(): void
```

##### `resetWireProperties` <a name="resetWireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.resetWireProperties"></a>

```typescript
public resetWireProperties(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeWireGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isConstruct"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

googleComputeWireGroup.GoogleComputeWireGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformElement"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

googleComputeWireGroup.GoogleComputeWireGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformResource"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

googleComputeWireGroup.GoogleComputeWireGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeWireGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeWireGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeWireGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeWireGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList">GoogleComputeWireGroupEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference">GoogleComputeWireGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList">GoogleComputeWireGroupTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireGroupProperties">wireGroupProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference">GoogleComputeWireGroupWireGroupPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireProperties">wireProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference">GoogleComputeWireGroupWirePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wires">wires</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList">GoogleComputeWireGroupWiresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.adminEnabledInput">adminEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.crossSiteNetworkInput">crossSiteNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.endpointsInput">endpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireGroupPropertiesInput">wireGroupPropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wirePropertiesInput">wirePropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.crossSiteNetwork">crossSiteNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.endpoints"></a>

```typescript
public readonly endpoints: GoogleComputeWireGroupEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList">GoogleComputeWireGroupEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeWireGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference">GoogleComputeWireGroupTimeoutsOutputReference</a>

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.topology"></a>

```typescript
public readonly topology: GoogleComputeWireGroupTopologyList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList">GoogleComputeWireGroupTopologyList</a>

---

##### `wireGroupProperties`<sup>Required</sup> <a name="wireGroupProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireGroupProperties"></a>

```typescript
public readonly wireGroupProperties: GoogleComputeWireGroupWireGroupPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference">GoogleComputeWireGroupWireGroupPropertiesOutputReference</a>

---

##### `wireProperties`<sup>Required</sup> <a name="wireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireProperties"></a>

```typescript
public readonly wireProperties: GoogleComputeWireGroupWirePropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference">GoogleComputeWireGroupWirePropertiesOutputReference</a>

---

##### `wires`<sup>Required</sup> <a name="wires" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wires"></a>

```typescript
public readonly wires: GoogleComputeWireGroupWiresList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList">GoogleComputeWireGroupWiresList</a>

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.adminEnabledInput"></a>

```typescript
public readonly adminEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crossSiteNetworkInput`<sup>Optional</sup> <a name="crossSiteNetworkInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.crossSiteNetworkInput"></a>

```typescript
public readonly crossSiteNetworkInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: IResolvable | GoogleComputeWireGroupEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeWireGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a>

---

##### `wireGroupPropertiesInput`<sup>Optional</sup> <a name="wireGroupPropertiesInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wireGroupPropertiesInput"></a>

```typescript
public readonly wireGroupPropertiesInput: GoogleComputeWireGroupWireGroupProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a>

---

##### `wirePropertiesInput`<sup>Optional</sup> <a name="wirePropertiesInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.wirePropertiesInput"></a>

```typescript
public readonly wirePropertiesInput: GoogleComputeWireGroupWireProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a>

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crossSiteNetwork`<sup>Required</sup> <a name="crossSiteNetwork" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.crossSiteNetwork"></a>

```typescript
public readonly crossSiteNetwork: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeWireGroupConfig <a name="GoogleComputeWireGroupConfig" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

const googleComputeWireGroupConfig: googleComputeWireGroup.GoogleComputeWireGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.crossSiteNetwork">crossSiteNetwork</a></code> | <code>string</code> | Required cross site network to which wire group belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the wire group is administratively enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.endpoints">endpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>[]</code> | endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#id GoogleComputeWireGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#project GoogleComputeWireGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.wireGroupProperties">wireGroupProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a></code> | wire_group_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.wireProperties">wireProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a></code> | wire_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `crossSiteNetwork`<sup>Required</sup> <a name="crossSiteNetwork" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.crossSiteNetwork"></a>

```typescript
public readonly crossSiteNetwork: string;
```

- *Type:* string

Required cross site network to which wire group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#cross_site_network GoogleComputeWireGroup#cross_site_network}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#name GoogleComputeWireGroup#name}

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the wire group is administratively enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#admin_enabled GoogleComputeWireGroup#admin_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#description GoogleComputeWireGroup#description}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | GoogleComputeWireGroupEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>[]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#endpoints GoogleComputeWireGroup#endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#id GoogleComputeWireGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#project GoogleComputeWireGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeWireGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#timeouts GoogleComputeWireGroup#timeouts}

---

##### `wireGroupProperties`<sup>Optional</sup> <a name="wireGroupProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.wireGroupProperties"></a>

```typescript
public readonly wireGroupProperties: GoogleComputeWireGroupWireGroupProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a>

wire_group_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#wire_group_properties GoogleComputeWireGroup#wire_group_properties}

---

##### `wireProperties`<sup>Optional</sup> <a name="wireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupConfig.property.wireProperties"></a>

```typescript
public readonly wireProperties: GoogleComputeWireGroupWireProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a>

wire_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#wire_properties GoogleComputeWireGroup#wire_properties}

---

### GoogleComputeWireGroupEndpoints <a name="GoogleComputeWireGroupEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

const googleComputeWireGroupEndpoints: googleComputeWireGroup.GoogleComputeWireGroupEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#endpoint GoogleComputeWireGroup#endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.property.interconnects">interconnects</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>[]</code> | interconnects block. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#endpoint GoogleComputeWireGroup#endpoint}.

---

##### `interconnects`<sup>Optional</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints.property.interconnects"></a>

```typescript
public readonly interconnects: IResolvable | GoogleComputeWireGroupEndpointsInterconnects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>[]

interconnects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#interconnects GoogleComputeWireGroup#interconnects}

---

### GoogleComputeWireGroupEndpointsInterconnects <a name="GoogleComputeWireGroupEndpointsInterconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

const googleComputeWireGroupEndpointsInterconnects: googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.interconnectName">interconnectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#interconnect_name GoogleComputeWireGroup#interconnect_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.interconnect">interconnect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#interconnect GoogleComputeWireGroup#interconnect}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.vlanTags">vlanTags</a></code> | <code>number[]</code> | VLAN tags for the interconnect. |

---

##### `interconnectName`<sup>Required</sup> <a name="interconnectName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.interconnectName"></a>

```typescript
public readonly interconnectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#interconnect_name GoogleComputeWireGroup#interconnect_name}.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.interconnect"></a>

```typescript
public readonly interconnect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#interconnect GoogleComputeWireGroup#interconnect}.

---

##### `vlanTags`<sup>Optional</sup> <a name="vlanTags" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects.property.vlanTags"></a>

```typescript
public readonly vlanTags: number[];
```

- *Type:* number[]

VLAN tags for the interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#vlan_tags GoogleComputeWireGroup#vlan_tags}

---

### GoogleComputeWireGroupTimeouts <a name="GoogleComputeWireGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

const googleComputeWireGroupTimeouts: googleComputeWireGroup.GoogleComputeWireGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#create GoogleComputeWireGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#delete GoogleComputeWireGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#update GoogleComputeWireGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#create GoogleComputeWireGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#delete GoogleComputeWireGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#update GoogleComputeWireGroup#update}.

---

### GoogleComputeWireGroupTopology <a name="GoogleComputeWireGroupTopology" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopology.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

const googleComputeWireGroupTopology: googleComputeWireGroup.GoogleComputeWireGroupTopology = { ... }
```


### GoogleComputeWireGroupTopologyEndpoints <a name="GoogleComputeWireGroupTopologyEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

const googleComputeWireGroupTopologyEndpoints: googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints = { ... }
```


### GoogleComputeWireGroupWireGroupProperties <a name="GoogleComputeWireGroupWireGroupProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

const googleComputeWireGroupWireGroupProperties: googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties.property.type">type</a></code> | <code>string</code> | Type of wire group (enum). |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of wire group (enum).

WIRE: a single pseudowire over two Interconnect connections   with no redundancy.
REDUNDANT: two pseudowires over four Interconnect connections, with two connections in one metro and two connections in another metro.
BOX_AND_CROSS: four pseudowires over four Interconnect connections, with two connections in one metro and two connections in another metro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#type GoogleComputeWireGroup#type}

---

### GoogleComputeWireGroupWireProperties <a name="GoogleComputeWireGroupWireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

const googleComputeWireGroupWireProperties: googleComputeWireGroup.GoogleComputeWireGroupWireProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.property.bandwidthUnmetered">bandwidthUnmetered</a></code> | <code>number</code> | The unmetered bandwidth setting. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.property.faultResponse">faultResponse</a></code> | <code>string</code> | Response when a fault is detected in a pseudowire: NONE: default. |

---

##### `bandwidthUnmetered`<sup>Optional</sup> <a name="bandwidthUnmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.property.bandwidthUnmetered"></a>

```typescript
public readonly bandwidthUnmetered: number;
```

- *Type:* number

The unmetered bandwidth setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#bandwidth_unmetered GoogleComputeWireGroup#bandwidth_unmetered}

---

##### `faultResponse`<sup>Optional</sup> <a name="faultResponse" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties.property.faultResponse"></a>

```typescript
public readonly faultResponse: string;
```

- *Type:* string

Response when a fault is detected in a pseudowire: NONE: default.

DISABLE_PORT: set the port line protocol down when inline probes detect a fault. This setting is only permitted on port mode pseudowires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_compute_wire_group#fault_response GoogleComputeWireGroup#fault_response}

---

### GoogleComputeWireGroupWires <a name="GoogleComputeWireGroupWires" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWires"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWires.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

const googleComputeWireGroupWires: googleComputeWireGroup.GoogleComputeWireGroupWires = { ... }
```


### GoogleComputeWireGroupWiresEndpoints <a name="GoogleComputeWireGroupWiresEndpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

const googleComputeWireGroupWiresEndpoints: googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints = { ... }
```


### GoogleComputeWireGroupWiresWireProperties <a name="GoogleComputeWireGroupWiresWireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

const googleComputeWireGroupWiresWireProperties: googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeWireGroupEndpointsInterconnectsList <a name="GoogleComputeWireGroupEndpointsInterconnectsList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.get"></a>

```typescript
public get(index: number): GoogleComputeWireGroupEndpointsInterconnectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeWireGroupEndpointsInterconnects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>[]

---


### GoogleComputeWireGroupEndpointsInterconnectsOutputReference <a name="GoogleComputeWireGroupEndpointsInterconnectsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resetInterconnect">resetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resetVlanTags">resetVlanTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterconnect` <a name="resetInterconnect" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resetInterconnect"></a>

```typescript
public resetInterconnect(): void
```

##### `resetVlanTags` <a name="resetVlanTags" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.resetVlanTags"></a>

```typescript
public resetVlanTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectInput">interconnectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectNameInput">interconnectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTagsInput">vlanTagsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnect">interconnect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectName">interconnectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTags">vlanTags</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interconnectInput`<sup>Optional</sup> <a name="interconnectInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectInput"></a>

```typescript
public readonly interconnectInput: string;
```

- *Type:* string

---

##### `interconnectNameInput`<sup>Optional</sup> <a name="interconnectNameInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectNameInput"></a>

```typescript
public readonly interconnectNameInput: string;
```

- *Type:* string

---

##### `vlanTagsInput`<sup>Optional</sup> <a name="vlanTagsInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTagsInput"></a>

```typescript
public readonly vlanTagsInput: number[];
```

- *Type:* number[]

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnect"></a>

```typescript
public readonly interconnect: string;
```

- *Type:* string

---

##### `interconnectName`<sup>Required</sup> <a name="interconnectName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectName"></a>

```typescript
public readonly interconnectName: string;
```

- *Type:* string

---

##### `vlanTags`<sup>Required</sup> <a name="vlanTags" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTags"></a>

```typescript
public readonly vlanTags: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeWireGroupEndpointsInterconnects;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>

---


### GoogleComputeWireGroupEndpointsList <a name="GoogleComputeWireGroupEndpointsList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.get"></a>

```typescript
public get(index: number): GoogleComputeWireGroupEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeWireGroupEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>[]

---


### GoogleComputeWireGroupEndpointsOutputReference <a name="GoogleComputeWireGroupEndpointsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.putInterconnects">putInterconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resetInterconnects">resetInterconnects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInterconnects` <a name="putInterconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.putInterconnects"></a>

```typescript
public putInterconnects(value: IResolvable | GoogleComputeWireGroupEndpointsInterconnects[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.putInterconnects.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>[]

---

##### `resetInterconnects` <a name="resetInterconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.resetInterconnects"></a>

```typescript
public resetInterconnects(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.interconnects">interconnects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList">GoogleComputeWireGroupEndpointsInterconnectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.interconnectsInput">interconnectsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interconnects`<sup>Required</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.interconnects"></a>

```typescript
public readonly interconnects: GoogleComputeWireGroupEndpointsInterconnectsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnectsList">GoogleComputeWireGroupEndpointsInterconnectsList</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `interconnectsInput`<sup>Optional</sup> <a name="interconnectsInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.interconnectsInput"></a>

```typescript
public readonly interconnectsInput: IResolvable | GoogleComputeWireGroupEndpointsInterconnects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsInterconnects">GoogleComputeWireGroupEndpointsInterconnects</a>[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeWireGroupEndpoints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupEndpoints">GoogleComputeWireGroupEndpoints</a>

---


### GoogleComputeWireGroupTimeoutsOutputReference <a name="GoogleComputeWireGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeWireGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTimeouts">GoogleComputeWireGroupTimeouts</a>

---


### GoogleComputeWireGroupTopologyEndpointsList <a name="GoogleComputeWireGroupTopologyEndpointsList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.get"></a>

```typescript
public get(index: number): GoogleComputeWireGroupTopologyEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeWireGroupTopologyEndpointsOutputReference <a name="GoogleComputeWireGroupTopologyEndpointsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints">GoogleComputeWireGroupTopologyEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeWireGroupTopologyEndpoints;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpoints">GoogleComputeWireGroupTopologyEndpoints</a>

---


### GoogleComputeWireGroupTopologyList <a name="GoogleComputeWireGroupTopologyList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupTopologyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.get"></a>

```typescript
public get(index: number): GoogleComputeWireGroupTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeWireGroupTopologyOutputReference <a name="GoogleComputeWireGroupTopologyOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList">GoogleComputeWireGroupTopologyEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopology">GoogleComputeWireGroupTopology</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: GoogleComputeWireGroupTopologyEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyEndpointsList">GoogleComputeWireGroupTopologyEndpointsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopologyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeWireGroupTopology;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupTopology">GoogleComputeWireGroupTopology</a>

---


### GoogleComputeWireGroupWireGroupPropertiesOutputReference <a name="GoogleComputeWireGroupWireGroupPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeWireGroupWireGroupProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireGroupProperties">GoogleComputeWireGroupWireGroupProperties</a>

---


### GoogleComputeWireGroupWirePropertiesOutputReference <a name="GoogleComputeWireGroupWirePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resetBandwidthUnmetered">resetBandwidthUnmetered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resetFaultResponse">resetFaultResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBandwidthUnmetered` <a name="resetBandwidthUnmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resetBandwidthUnmetered"></a>

```typescript
public resetBandwidthUnmetered(): void
```

##### `resetFaultResponse` <a name="resetFaultResponse" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.resetFaultResponse"></a>

```typescript
public resetFaultResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmeteredInput">bandwidthUnmeteredInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.faultResponseInput">faultResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmetered">bandwidthUnmetered</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.faultResponse">faultResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthUnmeteredInput`<sup>Optional</sup> <a name="bandwidthUnmeteredInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmeteredInput"></a>

```typescript
public readonly bandwidthUnmeteredInput: number;
```

- *Type:* number

---

##### `faultResponseInput`<sup>Optional</sup> <a name="faultResponseInput" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.faultResponseInput"></a>

```typescript
public readonly faultResponseInput: string;
```

- *Type:* string

---

##### `bandwidthUnmetered`<sup>Required</sup> <a name="bandwidthUnmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmetered"></a>

```typescript
public readonly bandwidthUnmetered: number;
```

- *Type:* number

---

##### `faultResponse`<sup>Required</sup> <a name="faultResponse" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.faultResponse"></a>

```typescript
public readonly faultResponse: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWirePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeWireGroupWireProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWireProperties">GoogleComputeWireGroupWireProperties</a>

---


### GoogleComputeWireGroupWiresEndpointsList <a name="GoogleComputeWireGroupWiresEndpointsList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.get"></a>

```typescript
public get(index: number): GoogleComputeWireGroupWiresEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeWireGroupWiresEndpointsOutputReference <a name="GoogleComputeWireGroupWiresEndpointsOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.interconnect">interconnect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.vlanTag">vlanTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints">GoogleComputeWireGroupWiresEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.interconnect"></a>

```typescript
public readonly interconnect: string;
```

- *Type:* string

---

##### `vlanTag`<sup>Required</sup> <a name="vlanTag" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.vlanTag"></a>

```typescript
public readonly vlanTag: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeWireGroupWiresEndpoints;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpoints">GoogleComputeWireGroupWiresEndpoints</a>

---


### GoogleComputeWireGroupWiresList <a name="GoogleComputeWireGroupWiresList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupWiresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.get"></a>

```typescript
public get(index: number): GoogleComputeWireGroupWiresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeWireGroupWiresOutputReference <a name="GoogleComputeWireGroupWiresOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.adminEnabled">adminEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList">GoogleComputeWireGroupWiresEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.wireProperties">wireProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList">GoogleComputeWireGroupWiresWirePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWires">GoogleComputeWireGroupWires</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: GoogleComputeWireGroupWiresEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresEndpointsList">GoogleComputeWireGroupWiresEndpointsList</a>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `wireProperties`<sup>Required</sup> <a name="wireProperties" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.wireProperties"></a>

```typescript
public readonly wireProperties: GoogleComputeWireGroupWiresWirePropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList">GoogleComputeWireGroupWiresWirePropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeWireGroupWires;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWires">GoogleComputeWireGroupWires</a>

---


### GoogleComputeWireGroupWiresWirePropertiesList <a name="GoogleComputeWireGroupWiresWirePropertiesList" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.get"></a>

```typescript
public get(index: number): GoogleComputeWireGroupWiresWirePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeWireGroupWiresWirePropertiesOutputReference <a name="GoogleComputeWireGroupWiresWirePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer"></a>

```typescript
import { googleComputeWireGroup } from '@cdktf/provider-google-beta'

new googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.bandwidthUnmetered">bandwidthUnmetered</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.faultResponse">faultResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties">GoogleComputeWireGroupWiresWireProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthUnmetered`<sup>Required</sup> <a name="bandwidthUnmetered" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.bandwidthUnmetered"></a>

```typescript
public readonly bandwidthUnmetered: number;
```

- *Type:* number

---

##### `faultResponse`<sup>Required</sup> <a name="faultResponse" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.faultResponse"></a>

```typescript
public readonly faultResponse: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWirePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeWireGroupWiresWireProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeWireGroup.GoogleComputeWireGroupWiresWireProperties">GoogleComputeWireGroupWiresWireProperties</a>

---



