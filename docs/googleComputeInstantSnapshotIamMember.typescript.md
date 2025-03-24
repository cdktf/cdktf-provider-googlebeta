# `googleComputeInstantSnapshotIamMember` Submodule <a name="`googleComputeInstantSnapshotIamMember` Submodule" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstantSnapshotIamMember <a name="GoogleComputeInstantSnapshotIamMember" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member google_compute_instant_snapshot_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.Initializer"></a>

```typescript
import { googleComputeInstantSnapshotIamMember } from '@cdktf/provider-google-beta'

new googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember(scope: Construct, id: string, config: GoogleComputeInstantSnapshotIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig">GoogleComputeInstantSnapshotIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig">GoogleComputeInstantSnapshotIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleComputeInstantSnapshotIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition">GoogleComputeInstantSnapshotIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInstantSnapshotIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.isConstruct"></a>

```typescript
import { googleComputeInstantSnapshotIamMember } from '@cdktf/provider-google-beta'

googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.isTerraformElement"></a>

```typescript
import { googleComputeInstantSnapshotIamMember } from '@cdktf/provider-google-beta'

googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.isTerraformResource"></a>

```typescript
import { googleComputeInstantSnapshotIamMember } from '@cdktf/provider-google-beta'

googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.generateConfigForImport"></a>

```typescript
import { googleComputeInstantSnapshotIamMember } from '@cdktf/provider-google-beta'

googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeInstantSnapshotIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeInstantSnapshotIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeInstantSnapshotIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstantSnapshotIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference">GoogleComputeInstantSnapshotIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition">GoogleComputeInstantSnapshotIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleComputeInstantSnapshotIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference">GoogleComputeInstantSnapshotIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleComputeInstantSnapshotIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition">GoogleComputeInstantSnapshotIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstantSnapshotIamMemberCondition <a name="GoogleComputeInstantSnapshotIamMemberCondition" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition.Initializer"></a>

```typescript
import { googleComputeInstantSnapshotIamMember } from '@cdktf/provider-google-beta'

const googleComputeInstantSnapshotIamMemberCondition: googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#expression GoogleComputeInstantSnapshotIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#title GoogleComputeInstantSnapshotIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#description GoogleComputeInstantSnapshotIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#expression GoogleComputeInstantSnapshotIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#title GoogleComputeInstantSnapshotIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#description GoogleComputeInstantSnapshotIamMember#description}.

---

### GoogleComputeInstantSnapshotIamMemberConfig <a name="GoogleComputeInstantSnapshotIamMemberConfig" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.Initializer"></a>

```typescript
import { googleComputeInstantSnapshotIamMember } from '@cdktf/provider-google-beta'

const googleComputeInstantSnapshotIamMemberConfig: googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#member GoogleComputeInstantSnapshotIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#name GoogleComputeInstantSnapshotIamMember#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#role GoogleComputeInstantSnapshotIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition">GoogleComputeInstantSnapshotIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#id GoogleComputeInstantSnapshotIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#project GoogleComputeInstantSnapshotIamMember#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#zone GoogleComputeInstantSnapshotIamMember#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#member GoogleComputeInstantSnapshotIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#name GoogleComputeInstantSnapshotIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#role GoogleComputeInstantSnapshotIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleComputeInstantSnapshotIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition">GoogleComputeInstantSnapshotIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#condition GoogleComputeInstantSnapshotIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#id GoogleComputeInstantSnapshotIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#project GoogleComputeInstantSnapshotIamMember#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_instant_snapshot_iam_member#zone GoogleComputeInstantSnapshotIamMember#zone}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstantSnapshotIamMemberConditionOutputReference <a name="GoogleComputeInstantSnapshotIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleComputeInstantSnapshotIamMember } from '@cdktf/provider-google-beta'

new googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition">GoogleComputeInstantSnapshotIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstantSnapshotIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshotIamMember.GoogleComputeInstantSnapshotIamMemberCondition">GoogleComputeInstantSnapshotIamMemberCondition</a>

---



