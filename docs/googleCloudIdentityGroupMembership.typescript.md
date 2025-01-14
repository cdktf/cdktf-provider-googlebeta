# `googleCloudIdentityGroupMembership` Submodule <a name="`googleCloudIdentityGroupMembership` Submodule" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityGroupMembership <a name="GoogleCloudIdentityGroupMembership" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership google_cloud_identity_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

new googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership(scope: Construct, id: string, config: GoogleCloudIdentityGroupMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig">GoogleCloudIdentityGroupMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig">GoogleCloudIdentityGroupMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putMemberKey">putMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putPreferredMemberKey">putPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetMemberKey">resetMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetPreferredMemberKey">resetPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMemberKey` <a name="putMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putMemberKey"></a>

```typescript
public putMemberKey(value: GoogleCloudIdentityGroupMembershipMemberKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putMemberKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a>

---

##### `putPreferredMemberKey` <a name="putPreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putPreferredMemberKey"></a>

```typescript
public putPreferredMemberKey(value: GoogleCloudIdentityGroupMembershipPreferredMemberKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putPreferredMemberKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a>

---

##### `putRoles` <a name="putRoles" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putRoles"></a>

```typescript
public putRoles(value: IResolvable | GoogleCloudIdentityGroupMembershipRoles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putRoles.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles">GoogleCloudIdentityGroupMembershipRoles</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudIdentityGroupMembershipTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMemberKey` <a name="resetMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetMemberKey"></a>

```typescript
public resetMemberKey(): void
```

##### `resetPreferredMemberKey` <a name="resetPreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetPreferredMemberKey"></a>

```typescript
public resetPreferredMemberKey(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudIdentityGroupMembership resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isConstruct"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformElement"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformResource"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleCloudIdentityGroupMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudIdentityGroupMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudIdentityGroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityGroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.memberKey">memberKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference">GoogleCloudIdentityGroupMembershipMemberKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.preferredMemberKey">preferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference">GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList">GoogleCloudIdentityGroupMembershipRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference">GoogleCloudIdentityGroupMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.memberKeyInput">memberKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.preferredMemberKeyInput">preferredMemberKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.rolesInput">rolesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles">GoogleCloudIdentityGroupMembershipRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `memberKey`<sup>Required</sup> <a name="memberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.memberKey"></a>

```typescript
public readonly memberKey: GoogleCloudIdentityGroupMembershipMemberKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference">GoogleCloudIdentityGroupMembershipMemberKeyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `preferredMemberKey`<sup>Required</sup> <a name="preferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.preferredMemberKey"></a>

```typescript
public readonly preferredMemberKey: GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference">GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.roles"></a>

```typescript
public readonly roles: GoogleCloudIdentityGroupMembershipRolesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList">GoogleCloudIdentityGroupMembershipRolesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudIdentityGroupMembershipTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference">GoogleCloudIdentityGroupMembershipTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberKeyInput`<sup>Optional</sup> <a name="memberKeyInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.memberKeyInput"></a>

```typescript
public readonly memberKeyInput: GoogleCloudIdentityGroupMembershipMemberKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a>

---

##### `preferredMemberKeyInput`<sup>Optional</sup> <a name="preferredMemberKeyInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.preferredMemberKeyInput"></a>

```typescript
public readonly preferredMemberKeyInput: GoogleCloudIdentityGroupMembershipPreferredMemberKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a>

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.rolesInput"></a>

```typescript
public readonly rolesInput: IResolvable | GoogleCloudIdentityGroupMembershipRoles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles">GoogleCloudIdentityGroupMembershipRoles</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudIdentityGroupMembershipTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityGroupMembershipConfig <a name="GoogleCloudIdentityGroupMembershipConfig" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

const googleCloudIdentityGroupMembershipConfig: googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.group">group</a></code> | <code>string</code> | The name of the Group to create this membership in. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.roles">roles</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles">GoogleCloudIdentityGroupMembershipRoles</a>[]</code> | roles block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#id GoogleCloudIdentityGroupMembership#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.memberKey">memberKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a></code> | member_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.preferredMemberKey">preferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a></code> | preferred_member_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The name of the Group to create this membership in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#group GoogleCloudIdentityGroupMembership#group}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.roles"></a>

```typescript
public readonly roles: IResolvable | GoogleCloudIdentityGroupMembershipRoles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles">GoogleCloudIdentityGroupMembershipRoles</a>[]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#roles GoogleCloudIdentityGroupMembership#roles}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#id GoogleCloudIdentityGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberKey`<sup>Optional</sup> <a name="memberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.memberKey"></a>

```typescript
public readonly memberKey: GoogleCloudIdentityGroupMembershipMemberKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a>

member_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#member_key GoogleCloudIdentityGroupMembership#member_key}

---

##### `preferredMemberKey`<sup>Optional</sup> <a name="preferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.preferredMemberKey"></a>

```typescript
public readonly preferredMemberKey: GoogleCloudIdentityGroupMembershipPreferredMemberKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a>

preferred_member_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#preferred_member_key GoogleCloudIdentityGroupMembership#preferred_member_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudIdentityGroupMembershipTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#timeouts GoogleCloudIdentityGroupMembership#timeouts}

---

### GoogleCloudIdentityGroupMembershipMemberKey <a name="GoogleCloudIdentityGroupMembershipMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

const googleCloudIdentityGroupMembershipMemberKey: googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.property.id">id</a></code> | <code>string</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.property.namespace">namespace</a></code> | <code>string</code> | The namespace in which the entity exists. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#id GoogleCloudIdentityGroupMembership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#namespace GoogleCloudIdentityGroupMembership#namespace}

---

### GoogleCloudIdentityGroupMembershipPreferredMemberKey <a name="GoogleCloudIdentityGroupMembershipPreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

const googleCloudIdentityGroupMembershipPreferredMemberKey: googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.property.id">id</a></code> | <code>string</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.property.namespace">namespace</a></code> | <code>string</code> | The namespace in which the entity exists. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#id GoogleCloudIdentityGroupMembership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#namespace GoogleCloudIdentityGroupMembership#namespace}

---

### GoogleCloudIdentityGroupMembershipRoles <a name="GoogleCloudIdentityGroupMembershipRoles" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

const googleCloudIdentityGroupMembershipRoles: googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.property.name">name</a></code> | <code>string</code> | The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.property.expiryDetail">expiryDetail</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a></code> | expiry_detail block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#name GoogleCloudIdentityGroupMembership#name}

---

##### `expiryDetail`<sup>Optional</sup> <a name="expiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.property.expiryDetail"></a>

```typescript
public readonly expiryDetail: GoogleCloudIdentityGroupMembershipRolesExpiryDetail;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a>

expiry_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#expiry_detail GoogleCloudIdentityGroupMembership#expiry_detail}

---

### GoogleCloudIdentityGroupMembershipRolesExpiryDetail <a name="GoogleCloudIdentityGroupMembershipRolesExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

const googleCloudIdentityGroupMembershipRolesExpiryDetail: googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail.property.expireTime">expireTime</a></code> | <code>string</code> | The time at which the MembershipRole will expire. |

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

The time at which the MembershipRole will expire.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.

Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#expire_time GoogleCloudIdentityGroupMembership#expire_time}

---

### GoogleCloudIdentityGroupMembershipTimeouts <a name="GoogleCloudIdentityGroupMembershipTimeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

const googleCloudIdentityGroupMembershipTimeouts: googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#create GoogleCloudIdentityGroupMembership#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#delete GoogleCloudIdentityGroupMembership#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#update GoogleCloudIdentityGroupMembership#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#create GoogleCloudIdentityGroupMembership#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#delete GoogleCloudIdentityGroupMembership#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloud_identity_group_membership#update GoogleCloudIdentityGroupMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityGroupMembershipMemberKeyOutputReference <a name="GoogleCloudIdentityGroupMembershipMemberKeyOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

new googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudIdentityGroupMembershipMemberKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a>

---


### GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference <a name="GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

new googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudIdentityGroupMembershipPreferredMemberKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a>

---


### GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference <a name="GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

new googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTimeInput">expireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTimeInput"></a>

```typescript
public readonly expireTimeInput: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudIdentityGroupMembershipRolesExpiryDetail;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a>

---


### GoogleCloudIdentityGroupMembershipRolesList <a name="GoogleCloudIdentityGroupMembershipRolesList" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

new googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.get"></a>

```typescript
public get(index: number): GoogleCloudIdentityGroupMembershipRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles">GoogleCloudIdentityGroupMembershipRoles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudIdentityGroupMembershipRoles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles">GoogleCloudIdentityGroupMembershipRoles</a>[]

---


### GoogleCloudIdentityGroupMembershipRolesOutputReference <a name="GoogleCloudIdentityGroupMembershipRolesOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

new googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.putExpiryDetail">putExpiryDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resetExpiryDetail">resetExpiryDetail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpiryDetail` <a name="putExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.putExpiryDetail"></a>

```typescript
public putExpiryDetail(value: GoogleCloudIdentityGroupMembershipRolesExpiryDetail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.putExpiryDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a>

---

##### `resetExpiryDetail` <a name="resetExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resetExpiryDetail"></a>

```typescript
public resetExpiryDetail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.expiryDetail">expiryDetail</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference">GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.expiryDetailInput">expiryDetailInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles">GoogleCloudIdentityGroupMembershipRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiryDetail`<sup>Required</sup> <a name="expiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.expiryDetail"></a>

```typescript
public readonly expiryDetail: GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference">GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference</a>

---

##### `expiryDetailInput`<sup>Optional</sup> <a name="expiryDetailInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.expiryDetailInput"></a>

```typescript
public readonly expiryDetailInput: GoogleCloudIdentityGroupMembershipRolesExpiryDetail;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudIdentityGroupMembershipRoles;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles">GoogleCloudIdentityGroupMembershipRoles</a>

---


### GoogleCloudIdentityGroupMembershipTimeoutsOutputReference <a name="GoogleCloudIdentityGroupMembershipTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityGroupMembership } from '@cdktf/provider-google-beta'

new googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudIdentityGroupMembershipTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a>

---



