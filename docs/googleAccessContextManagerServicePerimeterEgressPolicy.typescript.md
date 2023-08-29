# `google_access_context_manager_service_perimeter_egress_policy`

Refer to the Terraform Registory for docs: [`google_access_context_manager_service_perimeter_egress_policy`](https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy).

# `googleAccessContextManagerServicePerimeterEgressPolicy` Submodule <a name="`googleAccessContextManagerServicePerimeterEgressPolicy` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerServicePerimeterEgressPolicy <a name="GoogleAccessContextManagerServicePerimeterEgressPolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy google_access_context_manager_service_perimeter_egress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy(scope: Construct, id: string, config: GoogleAccessContextManagerServicePerimeterEgressPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig">GoogleAccessContextManagerServicePerimeterEgressPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig">GoogleAccessContextManagerServicePerimeterEgressPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putEgressFrom">putEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putEgressTo">putEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetEgressFrom">resetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetEgressTo">resetEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEgressFrom` <a name="putEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putEgressFrom"></a>

```typescript
public putEgressFrom(value: GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

---

##### `putEgressTo` <a name="putEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putEgressTo"></a>

```typescript
public putEgressTo(value: GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

---

##### `resetEgressFrom` <a name="resetEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetEgressFrom"></a>

```typescript
public resetEgressFrom(): void
```

##### `resetEgressTo` <a name="resetEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetEgressTo"></a>

```typescript
public resetEgressTo(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isConstruct"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformElement"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformResource"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressFromInput">egressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressToInput">egressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.perimeterInput">perimeterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.perimeter">perimeter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `egressFrom`<sup>Required</sup> <a name="egressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressFrom"></a>

```typescript
public readonly egressFrom: GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference</a>

---

##### `egressTo`<sup>Required</sup> <a name="egressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressTo"></a>

```typescript
public readonly egressTo: GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference</a>

---

##### `egressFromInput`<sup>Optional</sup> <a name="egressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressFromInput"></a>

```typescript
public readonly egressFromInput: GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

---

##### `egressToInput`<sup>Optional</sup> <a name="egressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressToInput"></a>

```typescript
public readonly egressToInput: GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `perimeterInput`<sup>Optional</sup> <a name="perimeterInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.perimeterInput"></a>

```typescript
public readonly perimeterInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.perimeter"></a>

```typescript
public readonly perimeter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerServicePerimeterEgressPolicyConfig <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterEgressPolicyConfig: googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.perimeter">perimeter</a></code> | <code>string</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | egress_to block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#id GoogleAccessContextManagerServicePerimeterEgressPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.perimeter"></a>

```typescript
public readonly perimeter: string;
```

- *Type:* string

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#perimeter GoogleAccessContextManagerServicePerimeterEgressPolicy#perimeter}

---

##### `egressFrom`<sup>Optional</sup> <a name="egressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.egressFrom"></a>

```typescript
public readonly egressFrom: GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#egress_from GoogleAccessContextManagerServicePerimeterEgressPolicy#egress_from}

---

##### `egressTo`<sup>Optional</sup> <a name="egressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.egressTo"></a>

```typescript
public readonly egressTo: GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#egress_to GoogleAccessContextManagerServicePerimeterEgressPolicy#egress_to}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#id GoogleAccessContextManagerServicePerimeterEgressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#timeouts GoogleAccessContextManagerServicePerimeterEgressPolicy#timeouts}

---

### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterEgressPolicyEgressFrom: googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identities">identities</a></code> | <code>string[]</code> | A list of identities that are allowed access through this 'EgressPolicy'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identityType">identityType</a></code> | <code>string</code> | Specifies the type of identities that are allowed access to outside the perimeter. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identities"></a>

```typescript
public readonly identities: string[];
```

- *Type:* string[]

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#identities GoogleAccessContextManagerServicePerimeterEgressPolicy#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

Specifies the type of identities that are allowed access to outside the perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#identity_type GoogleAccessContextManagerServicePerimeterEgressPolicy#identity_type}

---

### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterEgressPolicyEgressTo: googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.property.externalResources">externalResources</a></code> | <code>string[]</code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.property.operations">operations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>[]</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.property.resources">resources</a></code> | <code>string[]</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza. |

---

##### `externalResources`<sup>Optional</sup> <a name="externalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.property.externalResources"></a>

```typescript
public readonly externalResources: string[];
```

- *Type:* string[]

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#external_resources GoogleAccessContextManagerServicePerimeterEgressPolicy#external_resources}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.property.operations"></a>

```typescript
public readonly operations: IResolvable | GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>[]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#operations GoogleAccessContextManagerServicePerimeterEgressPolicy#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#resources GoogleAccessContextManagerServicePerimeterEgressPolicy#resources}

---

### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations: googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>[]</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.methodSelectors"></a>

```typescript
public readonly methodSelectors: IResolvable | GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>[]

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#method_selectors GoogleAccessContextManagerServicePerimeterEgressPolicy#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#service_name GoogleAccessContextManagerServicePerimeterEgressPolicy#service_name}

---

### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors: googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.method">method</a></code> | <code>string</code> | Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#method GoogleAccessContextManagerServicePerimeterEgressPolicy#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#permission GoogleAccessContextManagerServicePerimeterEgressPolicy#permission}

---

### GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterEgressPolicyTimeouts: googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#create GoogleAccessContextManagerServicePerimeterEgressPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#delete GoogleAccessContextManagerServicePerimeterEgressPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#update GoogleAccessContextManagerServicePerimeterEgressPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#create GoogleAccessContextManagerServicePerimeterEgressPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#delete GoogleAccessContextManagerServicePerimeterEgressPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.80.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#update GoogleAccessContextManagerServicePerimeterEgressPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentities"></a>

```typescript
public resetIdentities(): void
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentityType"></a>

```typescript
public resetIdentityType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identities">identities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityType">identityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identitiesInput"></a>

```typescript
public readonly identitiesInput: string[];
```

- *Type:* string[]

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityTypeInput"></a>

```typescript
public readonly identityTypeInput: string;
```

- *Type:* string

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identities"></a>

```typescript
public readonly identities: string[];
```

- *Type:* string[]

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>[]

---


### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>[]

---


### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>

---


### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.putMethodSelectors"></a>

```typescript
public putMethodSelectors(value: IResolvable | GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>[]

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors"></a>

```typescript
public resetMethodSelectors(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectors"></a>

```typescript
public readonly methodSelectors: GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```typescript
public readonly methodSelectorsInput: IResolvable | GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors</a>[]

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>

---


### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetExternalResources">resetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.putOperations"></a>

```typescript
public putOperations(value: IResolvable | GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>[]

---

##### `resetExternalResources` <a name="resetExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetExternalResources"></a>

```typescript
public resetExternalResources(): void
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetOperations"></a>

```typescript
public resetOperations(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResourcesInput">externalResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResources">externalResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operations"></a>

```typescript
public readonly operations: GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList</a>

---

##### `externalResourcesInput`<sup>Optional</sup> <a name="externalResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResourcesInput"></a>

```typescript
public readonly externalResourcesInput: string[];
```

- *Type:* string[]

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operationsInput"></a>

```typescript
public readonly operationsInput: IResolvable | GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations</a>[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `externalResources`<sup>Required</sup> <a name="externalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResources"></a>

```typescript
public readonly externalResources: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

---


### GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterEgressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

---



