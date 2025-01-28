# `googleNetworkSecurityMirroringEndpointGroup` Submodule <a name="`googleNetworkSecurityMirroringEndpointGroup` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityMirroringEndpointGroup <a name="GoogleNetworkSecurityMirroringEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group google_network_security_mirroring_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer"></a>

```typescript
import { googleNetworkSecurityMirroringEndpointGroup } from '@cdktf/provider-google-beta'

new googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup(scope: Construct, id: string, config: GoogleNetworkSecurityMirroringEndpointGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig">GoogleNetworkSecurityMirroringEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig">GoogleNetworkSecurityMirroringEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecurityMirroringEndpointGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityMirroringEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isConstruct"></a>

```typescript
import { googleNetworkSecurityMirroringEndpointGroup } from '@cdktf/provider-google-beta'

googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformElement"></a>

```typescript
import { googleNetworkSecurityMirroringEndpointGroup } from '@cdktf/provider-google-beta'

googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformResource"></a>

```typescript
import { googleNetworkSecurityMirroringEndpointGroup } from '@cdktf/provider-google-beta'

googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport"></a>

```typescript
import { googleNetworkSecurityMirroringEndpointGroup } from '@cdktf/provider-google-beta'

googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityMirroringEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityMirroringEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityMirroringEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityMirroringEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroupInput">mirroringDeploymentGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupIdInput">mirroringEndpointGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroup">mirroringDeploymentGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupId">mirroringEndpointGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mirroringDeploymentGroupInput`<sup>Optional</sup> <a name="mirroringDeploymentGroupInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroupInput"></a>

```typescript
public readonly mirroringDeploymentGroupInput: string;
```

- *Type:* string

---

##### `mirroringEndpointGroupIdInput`<sup>Optional</sup> <a name="mirroringEndpointGroupIdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupIdInput"></a>

```typescript
public readonly mirroringEndpointGroupIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecurityMirroringEndpointGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mirroringDeploymentGroup`<sup>Required</sup> <a name="mirroringDeploymentGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroup"></a>

```typescript
public readonly mirroringDeploymentGroup: string;
```

- *Type:* string

---

##### `mirroringEndpointGroupId`<sup>Required</sup> <a name="mirroringEndpointGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupId"></a>

```typescript
public readonly mirroringEndpointGroupId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityMirroringEndpointGroupConfig <a name="GoogleNetworkSecurityMirroringEndpointGroupConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityMirroringEndpointGroup } from '@cdktf/provider-google-beta'

const googleNetworkSecurityMirroringEndpointGroupConfig: googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.mirroringDeploymentGroup">mirroringDeploymentGroup</a></code> | <code>string</code> | Required. Immutable. The Mirroring Deployment Group that this resource is connected to. Format is: 'projects/{project}/locations/global/mirroringDeploymentGroups/{mirroringDeploymentGroup}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.mirroringEndpointGroupId">mirroringEndpointGroupId</a></code> | <code>string</code> | Required. Id of the requesting object If auto-generating Id server-side, remove this field and mirroring_endpoint_group_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#id GoogleNetworkSecurityMirroringEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#project GoogleNetworkSecurityMirroringEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'networksecurity.googleapis.com/MirroringEndpointGroup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#location GoogleNetworkSecurityMirroringEndpointGroup#location}

---

##### `mirroringDeploymentGroup`<sup>Required</sup> <a name="mirroringDeploymentGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.mirroringDeploymentGroup"></a>

```typescript
public readonly mirroringDeploymentGroup: string;
```

- *Type:* string

Required. Immutable. The Mirroring Deployment Group that this resource is connected to. Format is: 'projects/{project}/locations/global/mirroringDeploymentGroups/{mirroringDeploymentGroup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#mirroring_deployment_group GoogleNetworkSecurityMirroringEndpointGroup#mirroring_deployment_group}

---

##### `mirroringEndpointGroupId`<sup>Required</sup> <a name="mirroringEndpointGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.mirroringEndpointGroupId"></a>

```typescript
public readonly mirroringEndpointGroupId: string;
```

- *Type:* string

Required. Id of the requesting object If auto-generating Id server-side, remove this field and mirroring_endpoint_group_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#mirroring_endpoint_group_id GoogleNetworkSecurityMirroringEndpointGroup#mirroring_endpoint_group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#id GoogleNetworkSecurityMirroringEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#labels GoogleNetworkSecurityMirroringEndpointGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#project GoogleNetworkSecurityMirroringEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityMirroringEndpointGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#timeouts GoogleNetworkSecurityMirroringEndpointGroup#timeouts}

---

### GoogleNetworkSecurityMirroringEndpointGroupTimeouts <a name="GoogleNetworkSecurityMirroringEndpointGroupTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecurityMirroringEndpointGroup } from '@cdktf/provider-google-beta'

const googleNetworkSecurityMirroringEndpointGroupTimeouts: googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#create GoogleNetworkSecurityMirroringEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#delete GoogleNetworkSecurityMirroringEndpointGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#update GoogleNetworkSecurityMirroringEndpointGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#create GoogleNetworkSecurityMirroringEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#delete GoogleNetworkSecurityMirroringEndpointGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_mirroring_endpoint_group#update GoogleNetworkSecurityMirroringEndpointGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityMirroringEndpointGroup } from '@cdktf/provider-google-beta'

new googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecurityMirroringEndpointGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a>

---



